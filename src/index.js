const shell = require('shelljs')
const lodash = require('lodash')
const fs = require('fs')
const argv = require('minimist')(process.argv.slice(2))

// Image Encode
const base64Img = require('base64-img')

// Utils
const to = myvar => typeof myvar
const clBig = myvarZ => console.log(Object.values(myvarX))
const cl = myvarX => console.log(myvarX)
const clto = myvarY => cl(to(myvarY))
const desiredPath = folderPath => process.cwd() + '/' + folderPath

const  compile = require("string-template/compile")
const  greetingTemplate = compile("export default {0}")
const  greeting = greetingTemplate("Robert", 12)

const fileOrFolder = (fileOrFolder) => fileOrFolder.split('.').length > 1

const createFile = (fileNamePath, base64Val) => {
  const stringTemplateFileNamePath = fileNamePath+'.js'
  const fileConents = `module.exports = '${base64Val}'`
  fs.appendFile(stringTemplateFileNamePath, fileConents, (err) => {
    if (err) throw err;
    cl('Saved '+stringTemplateFileNamePath)
  })
}

if(argv.inline) {
  shell.echo('XXXXXXXXXXXXXXXXXXXXXXLETS INLINEXXXXXXXXXXXXXXXXXXXXXX\n\n')

  // Inlined 
  shell.mkdir('inlined')
  
  // Enter assets
  shell.cd('assets')

  // Folder list
  let folderList = shell.ls('-A','./')
  
  // Temporarily remove fonts folder
  folderList.splice(1, 1);

  const goIntoFolderAndDoMagic = (folder) => {    
    // // Go into one folder
    shell.cd(folder)

    // // List all the files
    const filesList = shell.ls('-A','./')

    // // For each file in list
    filesList.forEach(arrayitem => {
      base64Img.base64(arrayitem, (err, data) => {
        if(err) throw err
        createFile('../inlined/'+folder+'/'+arrayitem, data)
      })
    })
    shell.cd('..')
  }

  folderList.forEach(arrayitem => {
    shell.mkdir('../inlined/'+arrayitem)
    fileOrFolder(arrayitem)
      ? null
      : goIntoFolderAndDoMagic(arrayitem)
  })

  shell.echo('\n\n\n\n\n\n\n\nXXXXXXXXXXXXXXXXXXXXXXLETS INLINEXXXXXXXXXXXXXXXXXXXXXX')
}
if(argv.recycle) {
  shell.rm('-rf', 'inlined')
}