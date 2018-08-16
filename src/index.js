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

const fileOrFolder = (fileOrFolder) => fileOrFolder.split('.').length > 1

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
    // Make compiled folder
    // shell.mkdir('inlined')
    
    // // Go into one folder
    // shell.cd(folder)

    // // List all the files
    // const filesList = shell.ls('-A','./')

    // // For each file in list
    // filesList.forEach(arrayitem => {
    //   cl(arrayitem)
    //   // cl(process.cwd())

    //   base64Img.base64(arrayitem, (err, data) => {
    //     if(err) throw err
    //     shell.cd('../inlined/'+folder)
    //     createFile(arrayitem, data)
    //     shell.cd('../../'+folder)
    //   })
    // })
    // shell.cd('..')
  }

  folderList.forEach(arrayitem => {
    cl(arrayitem)
    // shell.cd('..')
    // shell.cd('inlined')
    // shell.mkdir(arrayitem)
    // shell.cd('..')
    // fileOrFolder(arrayitem)
    //   ? null
    //   : goIntoFolderAndDoMagic(arrayitem)
  })

  shell.echo('\n\n\n\n\n\n\n\nXXXXXXXXXXXXXXXXXXXXXXLETS INLINEXXXXXXXXXXXXXXXXXXXXXX')
}
if(argv.recycle) {
  shell.rm('-rf', 'inlined')
}