import { createAnatomy } from "@zag-js/anatomy"

export const anatomy = createAnatomy("select").parts(
  "label",
  "positioner",
  "trigger",
  "clearTrigger",
  "item",
  "itemIndicator",
  "itemGroup",
  "itemGroupLabel",
  "content",
)
export const parts = anatomy.build()
