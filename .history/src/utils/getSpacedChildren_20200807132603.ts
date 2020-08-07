import React from "react";

export default (
  children: JSX.Element[] | JSX.Element,
  space: number | undefined | string,
  axis: "X" | "Y",
) => {
  const childrenArray = React.Children.toArray(children);
  /*
  | Separate the trailing (not first) children from the children array
  */
  const trailingChildren = childrenArray.slice(1);
  /*
  | Set margin prop based on axis
  */
  let spaceValue;
  if (typeof space === "string") {
    console.log("fdsfsfdsfdsfds");
    switch (space) {
      case "small":
        spaceValue = 2;
        break;
      case "medium":
        spaceValue = 4;
        break;
      case "large":
        spaceValue = 8;
        break;

      default:
        spaceValue = 1;
        break;
    }
  } else {
    console.log("fdsfsfdsfdsfds fdfsf", typeof space);
    spaceValue = space;
  }

  const marginProp: object = { ...(axis === "X" ? { ml: spaceValue } : { mt: spaceValue }) };

  /*
  | Add the margiin to the children
  */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const trailingChildrenWithSpacing = trailingChildren.map((child: any) => {
    return React.cloneElement(child, marginProp, child.props.children);
  });
  /*
  | New children array with applied margin to trailing children
  */
  return [childrenArray[0], trailingChildrenWithSpacing];
};
