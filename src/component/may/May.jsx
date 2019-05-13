import React,{ Component } from 'react';
import './may.less'
import {filego} from './../../javascript/request'
class May extends Component{
    constructor(props){
        super(props);
        this.state={
            file:{}
        }  
    }
    showwaht=(e)=>{
        var filecome=e.target.files[0];
        console.info('e.target', e.target);
        // debugger;

        if(!filecome){
            return false;
        }

        console.info('filecome', filecome);
        this.setState({
            file:filecome
        }, () => {
            console.info('this.state.file', this.state.file);
        })
        var datas = new FormData();
        datas.append("file",filecome);
        console.log('===通过e.target.files[0]的file',filecome)
        console.log('===通过e.target.files[0]的file转成formData',datas.get('file'))
        
        var refrom=this.inputs.files[0];
        var datag = new FormData();
        datag.append("file1",refrom);
        console.log('===通过ref获得的file',refrom)
        console.log('===通过ref获得的file转成formData',datag.get('file1'))

        console.log(filecome.name)
        console.log(filecome.size)
        console.log(filecome.type);
        var reader = new FileReader();

        if(filecome.type.indexOf('image') > -1){
            reader.onload=function(){
                var dataURL = reader.result;
                var output = document.getElementById('output');
                output.src = dataURL;
            };
            reader.readAsDataURL(filecome);
        }
        else {
            const URL = window.URL || window.webkitURL;
            const pdfUrl = URL.createObjectURL(filecome);
            let embedNode = document.getElementsByClassName('previewList')[0];
            embedNode.innerHTML="看得到这个吗？"
            embedNode.innerHTML=`<embed width="80%" height="600px" src="${pdfUrl}" />`;
        }
    }
    submitoe=()=>{
        console.info('submitoe this.state.file', this.state.file);
        if(this.state.file.type){
            var thiso={
                file:this.state.file,
                name:this.state.file.name,
                type:this.state.file.type,
                size:this.state.file.size
            }
            var giveyou=this.state.file;
            console.log('===>>>>>>thiso',giveyou)

            var datas = new FormData();
            datas.append("file",giveyou);
            console.log('===通过e.target.files[0]的file',giveyou)
            console.log('===通过e.target.files[0]的file转成formData',datas.get('file'))
            
            var refrom=this.inputs.files[0];
            var datag = new FormData();
            datag.append("file1",refrom);
            console.log('===通过ref获得的file',refrom)
            console.log('===通过ref获得的file转成formData',datag.get('file1'))
            // filego('http://localhost:5000/haha',{
            //         type: "post", // *GET, POST, PUT, DELETE, etc.
            //         data:datas, // body data type must match "Content-Type" header,
            //         done:function(res){
            //             if(res.status===200){
            //                 console.log(res)
            //             }else{
            //                 console.log("Sorry,I failed.")
            //             }
            //         }
            // })
           
            // $.ajaxFormData({
            //     url: 'http://localhost:5000/haha',
            //     method: 'post',
            //     data: giveyou,
            //     success: function(data, textStatus, jqXHR) {
            //         alert(data);
            //     },
            //     error: function(jqXHR, textStatus, errorThrown) {
            //         alert(jqXHR.responseText);
            //     }
            // });
           
        }
        
    }
    render(){
        return (
            <div className="can" >
                
                <div className="use-may">
                    <div>
                        <input type="file" ref={input=>this.inputs=input} name="files" onChange={(e)=>{this.showwaht(e)}} id="filecome" accept="image/*, .pdf"  />
                    </div>
                    <button name="files" onClick={this.submitoe} type="submit">提交</button>
                </div>
                <img src="" alt="" id="output"/>

                <div className="previewList"></div>
            </div>
        )
    }
}
export default May 