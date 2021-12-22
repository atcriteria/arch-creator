// The Arch Creator code

import formatArchFile from "./formatArchFile";

const downloadToFile = () => {
    console.log("called save")
    formatArchFile();
    const content = "You will have to change me"
    const filename = "test.txt";
    const contentType = "text/plain";
    const a = document.createElement('a');
    const file = new Blob([content], {type: contentType});

    a.href = URL.createObjectURL(file);
    a.download = filename;
    a.click();

    URL.revokeObjectURL(a.href);
}

export default downloadToFile;