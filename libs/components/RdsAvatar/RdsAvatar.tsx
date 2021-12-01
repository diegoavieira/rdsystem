import React, { FC, MouseEvent, useState } from 'react';
import { withStyles, IconButton, Avatar } from '@material-ui/core';
import RdsAvatarProps from './RdsAvatar.props';
import RdsAvatarStyles from './RdsAvatar.styles';
import RdsMenu from '../RdsMenu';
import RdsListItemProps from '../RdsListItem/RdsListItem.props';

/**
 * [RdsAvatar Examples](https://diegoavieira.github.io/rdsystem/components/rds-avatar)
 */
const RdsAvatar: FC<RdsAvatarProps> = ({ classes, items, src, document }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const onOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const onClose = () => {
    setAnchorEl(null);
  };

  const mergeItems = (items: RdsListItemProps['item'][]) => {
    return items.map((item) => {
      if (item.action) {
        return {
          ...item,
          action: () => {
            item.action && item.action(item);
            onClose();
          }
        };
      }

      return item;
    });
  };

  return (
    <>
      {items ? (
        <RdsMenu document={document} items={mergeItems(items)} anchorEl={anchorEl} onClose={onClose}>
          <IconButton data-testid="rds-avatar" className={classes.root} onClick={onOpen}>
            <Avatar src={src}></Avatar>
          </IconButton>
        </RdsMenu>
      ) : (
        <Avatar src={src}></Avatar>
      )}
    </>
  );
};

export default withStyles(RdsAvatarStyles, { name: 'RdsAvatar' })(RdsAvatar);
