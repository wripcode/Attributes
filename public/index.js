var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
document.addEventListener("DOMContentLoaded", main);
function main() {
  return __awaiter(this, void 0, void 0, function* () {
    try {
      const allElements = yield webflow.getAllElements();
      const attrWrapper = document.getElementById("attr-wrapper");
      if (!attrWrapper) {
        console.error("Error: Could not find the #attr-wrapper element.");
        return;
      }
      for (const element of allElements) {
        const customAttributes = element.customAttributes;
        if (customAttributes && Object.keys(customAttributes).length > 0) {
          createAttributeListing(attrWrapper, element.id, customAttributes);
        }
        if ("getAllCustomAttributes" in element) {
          const allCustomAttributes = element.getAllCustomAttributes();
          if (allCustomAttributes.length !== 0) {
            createAttributeListing(attrWrapper, element.id, allCustomAttributes);
          }
        }
      }
      webflow.notify({ type: "Success", message: "Custom attributes retrieved successfully!" });
    } catch (error) {
      console.error("Error:", error);
      webflow.notify({ type: "Error", message: "An error occurred while fetching custom attributes" });
    }
  });
}
function createAttributeListing(attrWrapper, elementId, attributes) {
  for (const { name, value } of attributes) {
    const attrListing = document.createElement("div");
    attrListing.classList.add("attribute-listing");
    const flexHorizontal = document.createElement("div");
    flexHorizontal.classList.add("flex-horizontal");
    const attrName = document.createElement("p");
    attrName.classList.add("attr-list-item", "attr-name");
    attrName.textContent = `${name} :`;
    const attrValue = document.createElement("p");
    attrValue.classList.add("attr-list-item", "attr-value");
    attrValue.textContent = `"${value}"`;
    const delBtn = document.createElement("button");
    delBtn.classList.add("del-btn");
    delBtn.textContent = "delete";
    flexHorizontal.appendChild(attrName);
    flexHorizontal.appendChild(attrValue);
    attrListing.appendChild(flexHorizontal);
    attrListing.appendChild(delBtn);
    attrWrapper.appendChild(attrListing);
    console.log(`Element with id ${elementId} has custom attribute: ${name} - ${value}`);
    console.log(attrListing);
  }
}
