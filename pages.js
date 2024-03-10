// Define the JSON data as an object
const tutorialData = {
    HTML: {
        title: "HTML Tutorial",
        description: "HTML (Hypertext Markup Language) is the standard markup language for creating web pages and web applications. It describes the structure of web pages using a markup syntax. HTML elements are the building blocks of HTML pages, and they are represented by tags. Tags are enclosed in angle brackets, and most tags have an opening tag and a closing tag to define the start and end of the element. HTML documents consist of nested elements, forming a hierarchical structure known as the Document Object Model (DOM). With HTML, you can create headings, paragraphs, lists, links, images, forms, tables, and more to define the content and layout of web pages."
    },
    PHP: {
        title: "PHP Tutorial",
        description: "PHP (Hypertext Preprocessor) is a server-side scripting language designed for web development. It is widely used for creating dynamic web pages and web applications. PHP scripts are executed on the server, and the generated HTML output is sent to the client's web browser. PHP can perform various tasks, such as processing form data, interacting with databases, handling file uploads, and generating dynamic content. PHP code is embedded within HTML pages using special delimiters, allowing developers to mix PHP and HTML code seamlessly. PHP is an open-source language with a large community and extensive documentation, making it a popular choice for web development projects."
    },
    Java: {
        title: "Java Tutorial",
        description: "Java is a high-level, object-oriented programming language developed by Sun Microsystems (now owned by Oracle). It is designed to be platform-independent and is widely used for developing desktop, web, and mobile applications. Java programs are compiled into bytecode, which can run on any Java Virtual Machine (JVM), making Java applications highly portable. Java's syntax is similar to C and C++, making it easy for developers to learn and use. Java's strong type system, automatic memory management, and built-in support for multithreading make it suitable for building robust and scalable applications. Java also has a rich ecosystem of libraries, frameworks, and tools, making it a versatile language for various development tasks."
    },
    CSharp: {
        title: "C# Tutorial",
        description: "C# (pronounced C-sharp) is a modern, object-oriented programming language developed by Microsoft as part of its .NET framework. It is designed for building robust, scalable, and high-performance applications for Windows, web, and mobile platforms. C# combines the power of C++ with the simplicity of Java, making it a popular choice for developing enterprise-grade software. C# supports features such as type safety, automatic memory management (garbage collection), properties, events, delegates, and LINQ (Language-Integrated Query) for querying data. With its rich set of libraries and frameworks, including ASP.NET for web development and Xamarin for cross-platform mobile development, C# offers developers a comprehensive toolkit for building modern applications."
    },
    JavaScript: {
        title: "JavaScript Tutorial",
        description: "JavaScript is a high-level, interpreted programming language primarily used for client-side web development. It allows developers to add interactivity and dynamic behavior to web pages. JavaScript can manipulate the HTML and CSS of a webpage in real-time, enabling features such as form validation, DOM manipulation, event handling, and asynchronous programming. With the rise of modern web development frameworks like React, Angular, and Vue.js, JavaScript has become essential for building interactive and responsive web applications."
    },
};
var index=0;
// Function to change to the next course
function nextCourse() {
    index++;
    if (index >= Object.keys(tutorialData).length) {
        index = 0; // Reset index if it exceeds the number of tutorial categories
    }
    updateCourse();
}

// Function to change to the previous course
function prevCourse() {
    index--;
    if (index < 0) {
        index = Object.keys(tutorialData).length - 1; // Set index to the last tutorial category if it goes below 0
    }
    updateCourse();
}

function customCourse(x) {
    index=x;
    updateCourse();
}

// Function to update course content
function updateCourse() {
    let courseContent = document.getElementById('course_content');
    let courseTitle = document.getElementById('course_title');
    
    courseTitle.innerText = Object.values(tutorialData)[index].title;
    
    courseContent.innerHTML = `
        <p>${Object.values(tutorialData)[index].description}</p>
    `;
}

// Call the updateCourse function to display the initial course
updateCourse();
// Add event listener for the "Previous Course" button
document.getElementById('course-prev').addEventListener('click', prevCourse);
document.getElementById('course-next').addEventListener('click', nextCourse);
// Add event listeners for the tutorial categories
document.getElementById('HTML').addEventListener('click', () => customCourse(0));
document.getElementById('PHP').addEventListener('click', () => customCourse(1));
document.getElementById('Java').addEventListener('click', () => customCourse(2));
document.getElementById('C').addEventListener('click', () => customCourse(3));
document.getElementById('JavaScript').addEventListener('click', () => customCourse(4));
