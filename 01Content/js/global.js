import { SNB } from "../list11.js";
import { Select } from "./Select.js";
import { Tab } from "./tab.js";

SNB({
  parent: ".snb",
  aciveName: "active",
  depthName: "depth",
});

Select((value) => {
  console.log(value);
});

Tab(".tab", ".tab-contents");
Tab(".tab2", ".tab-contents2");
