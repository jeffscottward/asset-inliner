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

const logFolder = folderPath => {
  cl('\n\n//////START_folderPath//////////')
  cl('  '+folderPath)
  cl('//////END_folderPath//////////\n\n')
}

const logFolderLevel2 = folderPath => {
  cl('\n\n'+'  '+'//////START_NESTEDfolderPath//////////')
  cl('  '+'  '+folderPath)
  cl('  '+'//////END_NESTEDfolderPath//////////\n\n')
}

const enterList = (folderPath) => {
  shell.cd(folderPath)
  let list = shell.ls('-A','./')
  return list
}

const enterListReturn = (folderPath) => {
  shell.cd(folderPath)
  let list = shell.ls('-A','./')
  shell.cd(desiredPath(folderPath)+'/..')
  return list
}

const createFile = (fileName, base64Val) => {
  const stringTemplateFileName = fileName+'.js'
  fs.appendFile(stringTemplateFileName, base64Val, (err) => {
    if (err) throw err;
    console.log('Saved '+stringTemplateFileName+'.')
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
    shell.cd('..')
    shell.cd('inlined')
    shell.mkdir(arrayitem)
    shell.cd('..')
    fileOrFolder(arrayitem)
      ? null
      : goIntoFolderAndDoMagic(arrayitem)
  })


  // shell.cd('inlined')
  
  // folderList.map(folderName => {
  //   shell.mkdir(folderName)
  // })
  
  // shell.cd('..')



  // enterListReturn('./assets')
  // cl(process.cwd())

  // enterListReturn('./assets').map(folderPath => {
  //   logFolder(folderPath)
  //   enterListReturn(folderPath).map(item => {
  //     if(item && item !== '.DS_Store') {
  //       if(!fileOrFolder(item)) {
  //         const nestedFolder = item
  //         logFolderLevel2(nestedFolder)
  //         enterListReturn(nestedFolder).map(nestedItem => {
  //           cl('         '+nestedItem)
  //           // shell.cd('..')
  //         })
  //       } else {
  //         cl('         '+item)
  //       }
        
  //     }
  //     // if(!fileOrFolder(item)) {
  //     //   const folder = !fileOrFolder(item)
  //     //   enterListReturn(folder)
  //     //   // cl(shell.ls('-A','./'))
  //     //   shell.cd('..')
  //     // }
  //   })
  // })

  // shell.mkdir('inlined')

  shell.echo('\n\n\n\n\n\n\n\nXXXXXXXXXXXXXXXXXXXXXXLETS INLINEXXXXXXXXXXXXXXXXXXXXXX')
}
if(argv.recycle) {
  shell.rm('-rf', 'inlined')
}