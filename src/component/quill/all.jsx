import React from 'react'
export default class Allcon extends React.Component{
    
    render(){
        return(
            <div>
                <h4>controller</h4>
                <div id="toolbar">
                    <select className="ql-font ql-picker">
                        <option defaultValue="PingFang SC"></option>
                        <option value="Hiragino Sans GB"></option>
                        <option value="Microsoft YaHei"></option>
                        <option value="monospace"></option>
                        <option value="serif"></option>
                    </select>
                    <select className="ql-header" defaultValue={""} onChange={e => e.persist()}>
                        <option value="1" />
                        <option value="2" />
                        <option defaultValue="false" />
                    </select>
                    {/* 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'monospace', 'serif' */}
                    
                    <select className="ql-size">
                        <option value="12px"></option>
                        <option value="14px"></option>
                        <option value="16px"></option>
                        <option value="18px"></option>
                        <option value="20px"></option>
                        <option value="22px"></option>
                        <option value="24px"></option>
                        <option value="26px"></option>
                        <option value="28px"></option>
                        <option value="30px"></option>
                    </select>
                    <button className="ql-bold" />
                    <button className="ql-italic" />
                    <select className="ql-color">
                        <option value="red" />
                        <option value="green" />
                        <option value="blue" />
                        <option value="orange" />
                        <option value="violet" />
                        <option value="#d0d1d2" />
                        <option defaultValue="green" />
                    </select>
                    <select className="ql-background">
                        <option value="red" />
                        <option value="green" />
                        <option value="blue" />
                        <option value="orange" />
                        <option value="violet" />
                        <option value="#d0d1d2" />
                        <option defaultValue="green" />
                    </select>
                   
                    <select className="ql-align">
                        <option defaultValue="left"></option>
                        <option value="center"></option>
                        <option value="right"></option>
                        <option value="justify"></option>
                    </select>
                    <button type="button" className="ql-list" value="ordered"></button>
                    <button type="button" className="ql-list" value="bullet"></button>
                    <button type="button" className="ql-indent" value="-1"></button>
                    <button type="button" className="ql-indent" value="+1"></button>
                    <button type="button" className="ql-code" ></button>
                    
                   
                   
                    <div className="ql-images">
                        <input type="file" name="files" id="filecome" accept="image/*"  className="image-input ql-imagess" onChange={this.props.images} />
                        <button className="ql-image"></button>
                    </div>
                    <button className="ql-link" />
                   
                    
                </div>
                
            </div>
        )
    }
}
const CustomButton = () => <span className="octicon octicon-star" />;

/*
 * Event handler to be attached using Quill toolbar module (see line 73)
 * https://quilljs.com/docs/modules/toolbar/
 */
