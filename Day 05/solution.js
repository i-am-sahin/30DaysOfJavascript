function extension(filename){
    return filename.split(".").pop();
}
console.log("The file extension is: "+extension("hello.exe"))
console.log("The file extension is: "+extension("Style.css"))
console.log("The file extension is: "+extension("Index.html"))