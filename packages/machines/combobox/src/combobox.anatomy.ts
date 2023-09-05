import { createAnatomy } from "@zag-js/anatomy"

export const anatomy = createAnatomy("combobox").parts(
  "root",
  "label",
  "input",
  "positioner",
  "control",
  "trigger",
  "content",
  "clearTrigger",
  "item",
  "itemIndicator",
  "itemGroup",
  "itemGroupLabel",
)
export const parts = anatomy.build()
