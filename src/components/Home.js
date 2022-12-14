import React, {useState} from 'react'
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import sadface from '../images/sad-face-emoji.gif';
export default function Home() {

  const [length_file_array , setlength_file_array] = useState(0);
  const [showLoader, setShowloader] = useState(false);
  const [selectedFile, setSelectedFile] = useState([]);
  const [downloadBtnTxt, setdownloadBtnTxt ] = React.useState('Zip Now');
  const [downloadBtnDisabled, setDownloadBtnDisabled] = React.useState(false);
  const [selectedFileList, setSelectedFileList] = useState(false);
  const files = [];
  const ListFileArr =[];
  const Open = (id) => { 
    document.getElementById(id).click();
  }
  const handleFolderInput = (e) => {
    if(selectedFile===[]){
        
        
        const fileList = e.dataTransfer ? e.dataTransfer.files : e.target.files ;
        
        for (var i = 0; i < fileList.length; i++) {
            const file = fileList.item(i)
            files.push(file)
            
            const nameArr = file.webkitRelativePath.split('/');
            if (nameArr.length>1){
                if(!ListFileArr.includes(nameArr[0])){ 
                    ListFileArr.push(nameArr[0]);
                }
            }else{
                if(!ListFileArr.includes(file.name)){ 
                    ListFileArr.push(file.name);
                }
            }
            
        }
        
        
        console.log(files);
        setSelectedFile(files);
        setlength_file_array(files.length);
        setSelectedFileList(true);
        // console.log('selectedFile:')
        // console.log(selectedFile);
        // console.log('ListFileArr:')
        // console.log(ListFileArr);
        //ListOfItem(ListFileArr);
    }else{
        const fileList = e.dataTransfer ? e.dataTransfer.files : e.target.files ;

        for (var j = 0; j < fileList.length; j++) {
            
            const file = fileList.item(j);
            selectedFile.push(file);
            
            const nameArr = file.webkitRelativePath.split('/');
            if (nameArr.length>1){
                if(!ListFileArr.includes(nameArr[0])){ 
                    ListFileArr.push(nameArr[0]);
                }
            }else{
                if(!ListFileArr.includes(file.name)){ 
                    ListFileArr.push(file.name);
                }
            }

        }
        console.log(selectedFile);
        setlength_file_array(selectedFile.length);
        setSelectedFileList(true)
    }
}
const resetAll = () =>{
  setdownloadBtnTxt('Zip Now');
  setShowloader(false);
  setDownloadBtnDisabled(false);
  setlength_file_array(0);
  setSelectedFile([]);
  setSelectedFileList(false);
}
const removeListItem = (e) =>{
  //const index = selectedFile.indexOf(e);
  //console.log(index);
  
     var v = selectedFile.splice(e, 1); // 2nd parameter means remove one item only
    const newarr = selectedFile;
    setSelectedFile(newarr);
    setlength_file_array(newarr.length);
    console.log(v);
    console.log(selectedFile);
    //alert(e+' removed');
    //const newList = selectedFile.filter((item) => item[id] !== id);

    //setSelectedFile(newList);
  
  

}
const makezip = (files) =>{
  if(selectedFile.length===0){
    Open('modalOpen');
  }else{
    setdownloadBtnTxt('Please wait...');
    setShowloader(true);
    setDownloadBtnDisabled(true);
    const zip = new JSZip();
    files.forEach((file) => {
      if(file.webkitRelativePath===''){
          zip.file(file.name, file, { binary: true });
      }else{
          zip.file(file.webkitRelativePath, file, { binary: true });
      }
    
  });

  zip
    .generateAsync({type: 'blob'})
    .then(function (content) {
      saveAs(content, "my-zip.zip");
      setShowloader(false);
      setdownloadBtnTxt('Download again');
      setDownloadBtnDisabled(false);
    }).catch((e) => console.log(e));
  }
}


  return (
    <div>
    
    <div className='space-100'></div>
    <div className='container'>
      <div className='row'>
        <div className='col-sm col-lg-4'>
          <div className='drop-zone'>
            <div className='text-center'>
              <button className='text-white text-center fs-4 btn-select' onClick={() => Open('folder') }>Select Your Folder</button>
            </div>
            
            <p className='text-center text-white fs-6'>or</p>
            <div className='text-center'>
              <button className='text-white text-center fs-6 btn-select' onClick={() => Open('file') }>Select Your Files</button>
            </div>
            
            <input id='folder' type="file"  onChange={handleFolderInput} style={{ display: 'none' }} webkitdirectory='' mozdirectory='true' directory='true' />
            <input id='file' type="file" onChange={handleFolderInput} multiple style={{ display: 'none' }}/>
          </div>
          <div className='mt-3 mb-3 text-white text-center'>{length_file_array} files selected.</div>
          <div className='text-center mt-3 mb-5'>
            <button className='btn btn-warning me-3 ps-5 pe-5' disabled={downloadBtnDisabled} onClick={() => makezip(selectedFile)}>{downloadBtnTxt}<span className={showLoader ? null : 'd-none'}><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span></span></button>
            <button className='btn btn-warning ps-5 pe-5' onClick={() => resetAll()}>Reset</button>
          </div>
        </div>
        <div className='col-sm col-lg-8'>
          <div className={selectedFileList ? 'd-none': null }>
            <p className='fs-1 bold text-white'>Fastest online zipping tool..</p>
            <p className='fs-4 text-white'>
              MyZip is totally free online zip tool, you can create multiple files and folders zip from here within a seconds. But now limitation is you can only zip here upto 2gb of total folders or files. We continuously working on it to add more free tools. 
            </p>
            <p className='fs-4 text-white'>
              <span className='fs-2'>Our upcoming tools..</span> <br/><i className="bi bi-check-circle"></i> Unzip tools <br/><i className="bi bi-check-circle"></i> Remove image background tool 
              <br/><i className="bi bi-check-circle"></i> SMTP check tool and many more tools. 
            </p>
            <div>
              <a className='text-white me-3' href='https://github.com/Rajeshpaul1994'><i className="bi bi-github fs-3"></i></a>
              <a className='text-white me-3' href='https://www.linkedin.com/in/rajesh-kumar-paul-python-developer/'><i className="bi bi-linkedin fs-3"></i></a>
              <a className='text-white me-3' href='https://twitter.com/rajesh_myzip'><i className="bi bi-twitter fs-3"></i></a>
            </div>
          </div>
          <div id='style-4' style={{'height':'500px'}} className={selectedFileList ? 'overflow-auto' : 'd-none'}>
          <table className="table table-striped table-primary rounded-3">
            <thead>
              <tr>
                
                <th scope="col-10">File Name</th>
                <th scope="col-2">Path</th>
                <th></th>
                
              </tr>
            </thead>
            <tbody>
              {selectedFile.map(( listValue, index ) => {
                return (
                  <tr key={index}>
                    
                    <td ><i className="bi bi-file-earmark"></i> {listValue.name}</td>
                    
                    <td >{listValue.webkitRelativePath}</td>
                    <td><button className='bg-transparent cross-btn' onClick={()=>removeListItem(index)}><i  className="bi bi-x-circle"></i></button></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          </div>
          
        </div>
        
        
      </div>
    </div>
    
    <button type="button" style={{ display: 'none' }} className="btn btn-primary" id='modalOpen' data-bs-toggle="modal" data-bs-target="#staticBackdrop">
      Launch static backdrop modal
    </button>


    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className='text-center'>
              <img alt='' className='sadface' src={sadface} />
            </div>
            <div className=' mb-5 text-center'>
              <p className='fs-3 bold'> Sorry!</p>
              <p className='fs-5'>No file or folder selected...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
