import { Params } from '../params'

import { cloverFrame } from './utils'

import { translate } from '@jscad/modeling/src/operations/transforms'

export const waterProofSealCutout = (params: Params) => {
  const { length, width, height, wall, insertThickness, insertHeight, 
    sealThickness, insertClearance, cornerRadius } = params
  return translate(
    [
      wall, 
      wall, 
      height-(insertHeight+sealThickness)
    ],
    cloverFrame(
      width-(wall*2), 
      length-(wall*2), 
      insertHeight+sealThickness+insertClearance, 
      insertThickness+(insertClearance*2), 
      (cornerRadius+wall)/2
    )
  )
}

export const waterProofSeal = (params: Params) => {
  const { length, width, wall, cornerRadius, sealThickness, insertThickness, insertClearance } = params
  return cloverFrame(width-(wall*2)-(insertClearance*2), length-(wall*2)-(insertClearance*2), sealThickness, insertThickness, (cornerRadius+wall)/2)
}