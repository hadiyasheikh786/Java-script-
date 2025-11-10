// document.write("<h2>DOM Node Operations</h2>");

//     // (i) Node type of element having id “form-content”
//     let formContent = document.getElementById("form-content");
//     document.write("(i) Node type of 'form-content': " + formContent.nodeType + "<br>");
//     console.log("Node type of form-content:", formContent.nodeType);

//     // (ii) Node type of element having id “lastName” and its child node
//     let lastName = document.getElementById("lastName");
//     document.write("(ii) Node type of 'lastName': " + lastName.nodeType + "<br>");
//     document.write("Child node type of 'lastName': " + lastName.firstChild.nodeType + "<br>");
//     console.log("Node type of lastName:", lastName.nodeType);
//     console.log("Child node type:", lastName.firstChild.nodeType);

//     // (iii) Update child node of element having id “lastName”
//     lastName.firstChild.nodeValue = "Last Name : Updated Bank";
//     document.write("(iii) Updated child node of 'lastName': " + lastName.innerHTML + "<br>");
//     console.log("Updated innerHTML:", lastName.innerHTML);

//     // (iv) Get First and last child of id “main-content”
//     let mainContent = document.getElementById("main-content");
//     document.write("(iv) First child of 'main-content': " + mainContent.firstElementChild.innerHTML + "<br>");
//     document.write("Last child of 'main-content': " + mainContent.lastElementChild.innerHTML + "<br>");
//     console.log("First child:", mainContent.firstElementChild);
//     console.log("Last child:", mainContent.lastElementChild);

//     // (v) Get next and previous siblings of id “lastName”
//     let nextSibling = lastName.nextElementSibling;
//     let previousSibling = lastName.previousElementSibling;
//     document.write("(v) Next sibling of 'lastName': " + nextSibling.innerHTML + "<br>");
//     document.write("Previous sibling of 'lastName': " + previousSibling.innerHTML + "<br>");
//     console.log("Next sibling:", nextSibling);
//     console.log("Previous sibling:", previousSibling);

//     // (vi) Get parent node and node type of element having id “email”
//     let email = document.getElementById("email");
//     document.write("(vi) Parent node of 'email': " + email.parentNode.nodeName + "<br>");
//     document.write("Node type of 'email': " + email.nodeType + "<br>");
//     console.log("Parent node of email:", email.parentNode);
//     console.log("Node type of email:", email.nodeType);
  