import React, { FC, MouseEvent, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import {
  withStyles,
  ListItem,
  ListItemText,
  Collapse,
  List,
  Tooltip,
  IconButton,
  ListItemSecondaryAction,
  Popover
} from '@material-ui/core';
import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons';
import RdsNavItemProps from './RdsNavItem.props';
import RdsNavItemStyles from './RdsNavItem.styles';
import clsx from 'clsx';

/**
 * [RdsNavItem Examples](https://diegoavieira.github.io/rdsystem/components/rds-nav-item)
 */
const RdsNavItem: FC<RdsNavItemProps> = ({
  item,
  nested = 0,
  classes,
  expanded,
  onExpand,
  toogle,
  opened,
  onOpen,
  onClose,
  document
}) => {
  const history = useHistory();
  const location = useLocation();

  const [expandedNested, setExpandedNested] = useState<string | false>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const onExpandNested = (item: RdsNavItemProps['item'], newExpanded: boolean) => {
    setExpandedNested(newExpanded ? item.key : false);
  };

  useEffect(() => {
    const locationSplited = location.pathname.split('/');
    setExpandedNested(locationSplited[nested + 2]);
  }, [nested, location]);

  const onClick = (item: RdsNavItemProps['item']) => {
    if (item.path) {
      history.push(item.path);
      onClosePopover();
    }

    onExpand && onExpand(item, !expanded);
  };

  const onOpenPopover = (event: MouseEvent<HTMLButtonElement>, item: RdsNavItemProps['item']) => {
    if (item.path) {
      history.push(item.path);
    }

    setAnchorEl(event.currentTarget);
    onOpen && onOpen(item);
  };

  const onClosePopover = () => {
    onClose && onClose();
    setAnchorEl(null);
  };

  const actived = (item: RdsNavItemProps['item']): boolean => {
    if (item.items) {
      return !!item.items.find((itemNested) => {
        if (itemNested.path === location.pathname.split('/')[nested + 1]) {
          return true;
        } else {
          return actived(itemNested);
        }
      });
    } else {
      const splitPath = item.path?.split('/') || [];
      const splitLocation = location.pathname.split('/');

      return splitPath[nested + 1] === splitLocation[nested + 1];
    }
  };

  const nestedItems = (items: RdsNavItemProps['item'][]) => {
    return (
      <List disablePadding>
        {items.map(
          (item) =>
            !item.hidden && (
              <RdsNavItem
                key={item.key}
                item={item}
                classes={classes}
                nested={nested + 1}
                expanded={item.key === expandedNested}
                onExpand={onExpandNested}
                toogle={toogle}
                onClose={onClosePopover}
              />
            )
        )}
      </List>
    );
  };

  return (
    <>
      <ListItem
        data-testid="rds-nav-item"
        className={clsx(classes.root, `${toogle ? 'collapse-' : 'popover-'}${nested}`, {
          [classes.active]: actived(item),
          ['has-icon']: item.icon
        })}
        button
        onClick={() => onClick(item)}
        component="li"
      >
        <ListItemText classes={{ primary: classes.text }} primary={item.title} />
        {item.items && <ExpandMoreIcon className={clsx(classes.expandIcon, { [classes.expanded]: expanded })} />}
        {item.icon && (
          <ListItemSecondaryAction className={clsx(classes.icon, { [classes.iconButton]: nested === 0 && !toogle })}>
            <Tooltip
              PopperProps={{ container: document && document.body }}
              arrow
              title={item.title || ''}
              disableHoverListener={nested > 0}
              placement="right"
            >
              <IconButton
                edge="start"
                className={clsx({ [classes.iconActived]: actived(item) })}
                onClick={(event) => onOpenPopover(event, item)}
              >
                {item.icon}
              </IconButton>
            </Tooltip>
          </ListItemSecondaryAction>
        )}
      </ListItem>
      {item.items &&
        (toogle || nested > 0 ? (
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            {nestedItems(item.items)}
          </Collapse>
        ) : (
          <Popover data-testid="rds-nav-item-popover" open={!!opened} anchorEl={anchorEl} onClose={onClosePopover}>
            {nestedItems(item.items)}
          </Popover>
        ))}
    </>
  );
};

export default withStyles(RdsNavItemStyles, { name: 'RdsNavItem' })(RdsNavItem);
