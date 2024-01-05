import { union } from "@jscad/modeling/src/operations/booleans";
import { Params } from "../params";

import { cylinder } from '@jscad/modeling/src/primitives';
import { translate } from "@jscad/modeling/src/operations/transforms";

export const brassInserts = (params: Params) => {
  const { length, width, height, wall, cornerRadius, screwDiameter, brassInsertDiameter, brassInsertHeight } = params
  const offset = (cornerRadius/2)+wall
  return union(
    translate([offset, offset, height/2], cylinder({radius: brassInsertDiameter/2, height: height})),
    translate([width-offset, offset, height/2], cylinder({radius: brassInsertDiameter/2, height: height})),
    translate([offset, length-offset, height/2], cylinder({radius: brassInsertDiameter/2, height: height})),
    translate([width-offset, length-offset, height/2], cylinder({radius: brassInsertDiameter/2, height: height})),
  )
}