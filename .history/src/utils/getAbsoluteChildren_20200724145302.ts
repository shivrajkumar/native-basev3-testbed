import React from "react";

export default (children: JSX.Element[] | JSX.Element) => {
  const childrenArray = React.Children.toArray(children);
  /*
  | Separate the trailing (not first) children from the children array
  */
  // const trailingChildren = childrenArray.slice(1);

  /*
  | Add the position to the children
  */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const trailingChildrenWithSpacing = childrenArray.map((child: any) => {
    return React.cloneElement(
      child,
      { position: "absolute", left: 0, right: 0, width: "100%" },
      child.props.children,
    );
  });
  /*
  | New children array with applied margin to trailing children
  */
  return [childrenArray[0], trailingChildrenWithSpacing];
};
