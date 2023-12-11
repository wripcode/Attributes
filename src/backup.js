// document.addEventListener('DOMContentLoaded', async () => {
//     try {
//       const allElements: AnyElement[] = await webflow.getAllElements();
//       const attrWrapper = document.getElementById('attr-wrapper');

//       if (!attrWrapper) {
//         console.error('Error: Could not find the #attr-wrapper element.');
//         return;
//       }

//       for (const element of allElements) {
//         if (element.customAttributes) {
//           for (const [name, value] of Object.entries(element.customAttributes)) {
//             const attrListing = document.createElement('div');
//             attrListing.classList.add('attribute-listing');

//             const flexHorizontal = document.createElement('div');
//             flexHorizontal.classList.add('flex-horizontal');

//             const attrName = document.createElement('p');
//             attrName.classList.add('attr-list-item', 'attr-name');
//             attrName.textContent = name;

//             const attrValue = document.createElement('p');
//             attrValue.classList.add('attr-list-item', 'attr-value');
//             attrValue.textContent = value;

//             flexHorizontal.appendChild(attrName);
//             flexHorizontal.appendChild(attrValue);

//             const delBtn = document.createElement('button');
//             delBtn.classList.add('del-btn');
//             delBtn.textContent = 'delete';

//             attrListing.appendChild(flexHorizontal);
//             attrListing.appendChild(delBtn);

//             attrWrapper.appendChild(attrListing);
//           }
//         }

//         if ('getAllCustomAttributes' in element) {
//           const allCustomAttributes = await (element as any).getAllCustomAttributes();
//           if (allCustomAttributes.length !== 0) {
//             for (const { name, value } of allCustomAttributes) {
//               const attrListing = document.createElement('div');
//               attrListing.classList.add('attribute-listing');

//               const flexHorizontal = document.createElement('div');
//               flexHorizontal.classList.add('flex-horizontal');

//               const attrName = document.createElement('p');
//               attrName.classList.add('attr-list-item', 'attr-name');
//               attrName.textContent = name;

//               const attrValue = document.createElement('p');
//               attrValue.classList.add('attr-list-item', 'attr-value');
//               attrValue.textContent = value;

//               flexHorizontal.appendChild(attrName);
//               flexHorizontal.appendChild(attrValue);

//               const delBtn = document.createElement('button');
//               delBtn.classList.add('del-btn');
//               delBtn.textContent = 'delete';

//               attrListing.appendChild(flexHorizontal);
//               attrListing.appendChild(delBtn);

//               attrWrapper.appendChild(attrListing);
//             }
//           }
//         }
//       }

//       webflow.notify({ type: 'Success', message: 'Custom attributes retrieved successfully!' });
//     } catch (error) {
//       console.error('Error:', error);
//       webflow.notify({ type: 'Error', message: 'An error occurred while fetching custom attributes' });
//     }
//   });

// document.addEventListener('DOMContentLoaded', async () => {
//     try {
//       const allElements: AnyElement[] = await webflow.getAllElements();
//       const attrWrapper = document.getElementById('attr-wrapper');

//       if (!attrWrapper) {
//         console.error('Error: Could not find the #attr-wrapper element.');
//         return;
//       }

//       for (const element of allElements) {
//         const customAttributes = element.customAttributes;

//         if (customAttributes && Object.keys(customAttributes).length > 0) {
//           createAttributeListing(attrWrapper, element, customAttributes);
//         }

//         if ('getAllCustomAttributes' in element) {
//           const allCustomAttributes = await (element as any).getAllCustomAttributes();
//           if (allCustomAttributes.length !== 0) {
//             createAttributeListing(attrWrapper, element, allCustomAttributes);
//           }
//         }
//       }

//       webflow.notify({ type: 'Success', message: 'Custom attributes retrieved successfully!' });
//     } catch (error) {
//       console.error('Error:', error);
//       webflow.notify({ type: 'Error', message: 'An error occurred while fetching custom attributes' });
//     }
//   });

//   function createAttributeListing(attrWrapper, element, attributes) {
//     for (const { name, value } of attributes) {
//       const attrListing = document.createElement('div');
//       attrListing.classList.add('attribute-listing');

//       const flexHorizontal = document.createElement('div');
//       flexHorizontal.classList.add('flex-horizontal');

//       const attrName = document.createElement('p');
//       attrName.classList.add('attr-list-item', 'attr-name');
//       attrName.textContent = `${name} :`;

//       const attrValue = document.createElement('p');
//       attrValue.classList.add('attr-list-item', 'attr-value');
//       attrValue.textContent = value;

//       const delBtn = document.createElement('button');
//       delBtn.classList.add('del-btn');
//       delBtn.textContent = 'delete';

//       attrListing.appendChild(flexHorizontal);
//       flexHorizontal.appendChild(attrName);
//       flexHorizontal.appendChild(attrValue);
//       attrListing.appendChild(delBtn);

//       attrWrapper.appendChild(attrListing);

//       delBtn.addEventListener('click', async () => {
//         try {
//           // Use the stored element reference
//           if (element.configurable) {
//             const updatedAttributes = { ...element.customAttributes };
//             delete updatedAttributes[name];
//             element.setAttributes(updatedAttributes);
//             attrListing.remove();
//             webflow.notify({ type: 'Success', message: 'Attribute deleted successfully!' });
//           } else {
//             console.error('Error: Element is not configurable.');
//             webflow.notify({ type: 'Error', message: 'Failed to delete attribute.' });
//           }
//         } catch (error) {
//           console.error('Error:', error);
//           webflow.notify({ type: 'Error', message: 'An error occurred while deleting the attribute.' });
//         }
//       });
//     }
//   }
