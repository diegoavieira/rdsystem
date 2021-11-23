import React, { FC, useEffect, useState } from 'react';
import { withStyles } from '@material-ui/core';
import RdsMarkedProps from './RdsMarked.props';
import RdsMarkedStyles from './RdsMarked.styles';
import MuiRdsSandbox from '../RdsSandbox';
import marked from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/vs2015.css';

const RdsSandbox = withStyles(() => ({
  root: {
    marginBottom: 16
  }
}))(MuiRdsSandbox);

/**
 * [RdsMarked Examples](https://diegoavieira.github.io/rdsystem/common/rds-marked)
 */
const RdsMarked: FC<RdsMarkedProps> = ({ file, classes, sandboxes }) => {
  const [elements, setElements] = useState<JSX.Element[]>([]);

  const split = (markdown: string) => {
    return markdown.split(/^{{("sandbox":[^}]*)}}$/gm).filter((content) => !/^\s*$/.test(content));
  };

  const render = (markdown: string) => {
    return marked(markdown, {
      headerIds: false,
      langPrefix: 'hljs language-',
      highlight: (code, lang) => {
        return hljs.highlightAuto(code, [lang]).value;
      }
    });
  };

  useEffect(() => {
    try {
      const fetchFile = async () => {
        const data = await fetch(`${window.location.origin}/${file}`);
        const markdown = await data.text();

        const contents = split(markdown).map((content, i) => {
          if (/^"sandbox": "(.*)"/.test(content)) {
            const { sandbox, bg, frame } = JSON.parse(`{${content}}`);

            if (sandboxes && sandboxes[sandbox]) {
              const demoExt = sandbox.match(/\.[a-z]+$/i)[0].replace('.', '');
              const SandboxDemo = sandboxes[sandbox].demo;

              const codeRaw = sandboxes[sandbox].code;
              const codeRendered = render(`${'```'}${demoExt}\n${codeRaw}\n${'```'}`);

              const SandboxCode = () => (
                <div className={classes.element} dangerouslySetInnerHTML={{ __html: codeRendered }} />
              );

              return (
                <RdsSandbox
                  key={i}
                  demo={<SandboxDemo />}
                  code={<SandboxCode />}
                  bg={bg && JSON.parse(bg)}
                  frame={frame && JSON.parse(frame)}
                />
              );
            }
          }

          return <div className={classes.element} key={i} dangerouslySetInnerHTML={{ __html: render(content) }} />;
        });

        setElements(contents);
      };

      fetchFile();
    } catch (error) {
      console.log(error);
    }
  }, [file, sandboxes, classes]);

  return <div className={classes.root}>{[...elements]}</div>;
};

export default withStyles(RdsMarkedStyles, { name: 'RdsMarked' })(RdsMarked);
