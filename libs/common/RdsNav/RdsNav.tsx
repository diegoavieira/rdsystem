import React, { FC, useEffect, useState } from 'react';
import { withStyles, List, ListSubheader } from '@material-ui/core';
import RdsNavProps from './RdsNav.props';
import RdsNavStyles from './RdsNav.styles';
import RdsNavItem from '../RdsNavItem';
import RdsNavItemProps from '../RdsNavItem/RdsNavItem.props';

/**
 * [RdsNav Examples](https://diegoavieira.github.io/rdsystem/common/rds-nav)
 */
const RdsNav: FC<RdsNavProps> = ({
  items: itemsList,
  classes,
  RdsNavItemComponent = RdsNavItem,
  toogle,
  nested = 0,
  document
}) => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const [opened, setOpened] = useState<string | false>(false);

  const onExpand = (item: RdsNavItemProps['item'], newExpanded: boolean) => {
    setExpanded(newExpanded ? item.key : false);
  };

  const onOpen = (item: RdsNavItemProps['item']) => {
    setOpened(item.key);
  };

  const onClose = () => {
    setOpened(false);
  };

  useEffect(() => {
    const locationSplited = window.location.pathname.split('/');
    setExpanded(locationSplited[nested + 1]);
  }, [nested]);

  return (
    <nav className={classes.root}>
      {itemsList.map((itemList) => (
        <List
          key={itemList.key}
          className={classes.list}
          subheader={
            itemList.title ? <ListSubheader className={classes.subheader}>{itemList.title}</ListSubheader> : undefined
          }
        >
          {itemList.items &&
            itemList.items.map((item) => (
              <RdsNavItemComponent
                document={document}
                key={item.key}
                item={item}
                expanded={item.key === expanded}
                onExpand={onExpand}
                toogle={toogle}
                opened={item.key === opened}
                onOpen={onOpen}
                onClose={onClose}
              />
            ))}
        </List>
      ))}
    </nav>
  );
};

export default withStyles(RdsNavStyles, { name: 'RdsNav' })(RdsNav);
