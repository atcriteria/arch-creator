// The Arch Creator code

const downloadToFile = () => {
    console.log("called save")
    formatArchFile();
    // const container = document.getElementById('test-content');
    const container = document.querySelector("textarea");
    const content = container.value;
    const filename = "test.txt";
    const contentType = "text/plain";
    const a = document.createElement('a');
    const file = new Blob([content], {type: contentType});

    a.href = URL.createObjectURL(file);
    a.download = filename;
    a.click();

    URL.revokeObjectURL(a.href);
}