import React from 'react';
import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';

import {Item} from './Item';

export function SortableItem(props) {
  const {
    isDragging,
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({id: props.id});

  const backgroundColor =
    props.id == 1 ? 'Orange' : props.id == 2 ? 'pink' : 'gray';

  const style = {
    position: 'relative',
    zIndex: isDragging ? 1 : undefined,
    transform: CSS.Transform.toString(transform),
    transition,
    height: 100,
    width: 100,
    border: '2px solid black',
    backgroundColor,
    borderRadius: 10,
    touchAction: 'none',
    margin: 20,
  };

  return <Item ref={setNodeRef} style={style} {...attributes} {...listeners} />;
}
