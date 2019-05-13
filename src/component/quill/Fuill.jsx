import React from 'react';
import './quill.less'
import ReactQuill, {Quill,Delta}  from 'react-quill'
import $ from 'jquery'
import Allcon  from './all.jsx';
import 'react-quill/dist/quill.snow.css'
var Size=Quill.import('attributors/style/size')
// var Iamges=Quill.import('formats/image');
var Font=Quill.import('attributors/style/font');
// var Code=Quill.import('formats/code')
// console.log(Code)
// var Toolbar=Quill.import('formats/image');
Size.whitelist=[ '12px', '14px', '16px', '18px', '20px', '22px', '24px', '26px', '28px','30px'];
Font.whitelist=['PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'monospace', 'serif'];
Quill.register(Size, true);
// Quill.register(Iamges, true);
Quill.register(Font, true);
export default class Fuill extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
             text: '' ,
             deltas:'',
             src:''
            } // You can also pass a Quill Delta here
        this.really=React.createRef();
        this.handleChange = this.handleChange.bind(this)
      }
    
      handleChange(value, delta, source, editor) {
        this.setState({ text: value,deltas:delta })
      }
      componentDidMount(){
          var _this=this;
        $('.canEditor').on('paste',function(e){
            console.log(e.originalEvent.clipboardData)
            var cbd = e.clipboardData;
            var pastedData1 = e.originalEvent.clipboardData.files;
            var pastedData = e.originalEvent.clipboardData.getData('text');
            pastedData1=pastedData1[0];
            console.log(pastedData1);
            haha='http://oj6ydypm2.bkt.clouddn.com/upfile_1535037319697.png'
            $( ".ql-image").trigger('click',true);
                  var reader  = new FileReader();

                  reader.addEventListener("load", function () {
                    _this.setState({
                        src:reader.result
                    })
                  }, false);

                  if (pastedData1) {
                    reader.readAsDataURL(pastedData1);
                  }
        })

      }
      getall=()=>{
          console.log(this.state.text)
          console.log(this.state.deltas)
      }
      render() {
        return (
            
            <div>
                <h4>This is quill</h4>
                <img src={this.state.src} alt='can you see me' className="aa"></img>
                <div ref="quiet" className="canmay">
                    {/* <this.Upafile ></this.Upafile> */}
                    <Allcon images={fileImage}></Allcon>
                    <ReactQuill 
                            value={this.state.text}
                            onChange={this.handleChange}  
                            modules={Fuill.modules}
                            formats={Fuill.formats}
                            bounds='.canmay'
                            className="canEditor"
                            ref={this.really}
                    >
                    </ReactQuill>
                </div>
                <button onClick={this.getall}>all is here</button>
            </div>
          
        )
      }
}
function images(e,url){
    console.log('这是触发的',e)
    url=haha;
    const cursorPosition = this.quill.getSelection().index;
    this.quill.insertEmbed(10, 'image', url);
    this.quill.setSelection(cursorPosition + 10);
    
}
var haha='';
function fileImage(e){
    console.log(e.target.files[0])
    var urls='http://oj6ydypm2.bkt.clouddn.com/upfile_1535037319697.png';
    haha=urls;
    $( ".ql-image").trigger('click',true,urls);
}

Fuill.modules = {
    toolbar:{
        container:"#toolbar",
        handlers:{
            'image':images,
            'imagess':fileImage,
        }
    },
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    }
}
Fuill.formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video','clean',
    'color','background','align','container','code'
]
