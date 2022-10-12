import logo from './images/myzip-logo.png';
import './App.css';
import React ,{useState} from 'react';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import sadface from './images/sad-face-emoji.gif';
function App() {
  const [length_file_array , setlength_file_array] = useState(0);
  const [showLoader, setShowloader] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [downloadBtnTxt, setdownloadBtnTxt ] = React.useState('Zip Now');
  const [downloadBtnDisabled, setDownloadBtnDisabled] = React.useState(false);
  
  const files = [];
  const ListFileArr =[];
  const Open = (id) => { 
    document.getElementById(id).click();
  }
  const handleFolderInput = (e) => {
    if(selectedFile==null){
        
        
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
    }
}
const resetAll = () =>{
  setdownloadBtnTxt('Make it zip and download it!');
  setShowloader(false);
  setDownloadBtnDisabled(false);
  setlength_file_array(0);
  setSelectedFile(null);
}
const makezip = (files) =>{
  if(selectedFile===null){
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
    <div className="main">
      <div className='container'>
        <div className='row'>
          <div className='col-sm'>
            <img src={logo} className='zip-karo-logo' alt='myzip-logo' />
          </div>
          <div className='col-sm'></div>
          <div className='col-sm'></div>
          <div className='col-sm'></div>
        </div>
      </div>
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
              <button className='btn btn-primary me-3 ps-5 pe-5' disabled={downloadBtnDisabled} onClick={() => makezip(selectedFile)}>{downloadBtnTxt}<span className={showLoader ? null : 'd-none'}><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span></span></button>
              <button className='btn btn-primary ps-5 pe-5' onClick={() => resetAll()}>Reset</button>
            </div>
          </div>
          <div className='col-sm col-lg-8'>
            <p className='fs-1 bold text-white'>Fastest online zipping tool..</p>
            <p className='fs-4 text-white'>
              MyZip is totally free online zip tool, you can create multiple files and folders zip from here within a seconds. But now limitation is you can only zip here upto 2gb of total folders or files. We continuously working on it to solve the limitations. 
            </p>
            <p className='text-white fs-4'>
            Connect Me:<a href='https://www.linkedin.com/in/rajesh-kumar-paul-python-developer/' ><i class=" ms-3 text-white fs-4 bi bi-linkedin"></i></a>
            </p>
          </div>
          
          
        </div>
      </div>
      
      <button type="button" style={{ display: 'none' }} class="btn btn-primary" id='modalOpen' data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        Launch static backdrop modal
      </button>


      <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div className='text-center'>
                <img className='sadface' src={sadface} />
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
  );
}

export default App;
