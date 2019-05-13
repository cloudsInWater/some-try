import React,{ Component } from 'react';
import {Editor,EditorState,RichUtils,Modifier} from 'draft-js'
import {stateToHTML} from 'draft-js-export-html';
// import 'draft-js/dist/Draft.css'
import './fu.less'
export default class Fuwen extends Component{
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty(),
            textA:'left'
        };
        this.handleKeyCommand = this._handleKeyCommand.bind(this);
        this.onChange = (editorState) => {this.setState({editorState})};
        this.toggleBlockType = this._toggleBlockType.bind(this);
        this.toggleInlineStyle = this._toggleInlineStyle.bind(this);
        this.toggleColor = (toggledColor) => this._toggleColor(toggledColor);
        // textAlign="left" | "center" | "right"


    }
    _handleKeyCommand(command, editorState) {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
          this.onChange(newState);
          return true;
        }
        return false;
      }
    _toggleBlockType(blockType) {
        this.onChange(
            RichUtils.toggleBlockType(this.state.editorState, blockType),
        );
    }
    _toggleInlineStyle(inlineStyle) {
        this.onChange(
            RichUtils.toggleInlineStyle(this.state.editorState, inlineStyle),
        );
        var no_two=['red','orange','yellow','green','blue','indigo','violet','left','center','right']
        if(no_two.includes(inlineStyle)){
            this._toggleColor(inlineStyle)
        }
    }
    _toggleColor(toggledColor) {
        const {editorState} = this.state;
        const selection = editorState.getSelection();

        // Let's just allow one color at a time. Turn off all active colors.
        const nextContentState = Object.keys(colorStyleMap)
          .reduce((contentState, color) => {
            return Modifier.removeInlineStyle(contentState, selection, color)
          }, editorState.getCurrentContent());

        let nextEditorState = EditorState.push(
          editorState,
          nextContentState,
          'change-inline-style'
        );

        const currentStyle = editorState.getCurrentInlineStyle();

        // Unset style override for current color.
        if (selection.isCollapsed()) {
          nextEditorState = currentStyle.reduce((state, color) => {
            return RichUtils.toggleInlineStyle(state, color);
          }, nextEditorState);
        }

        // If the color is being toggled on, apply it.
        if (!currentStyle.has(toggledColor)) {
          nextEditorState = RichUtils.toggleInlineStyle(
            nextEditorState,
            toggledColor
          );
        }

        this.onChange(nextEditorState);
      }
    buttons=()=>{
        let options = {
            inlineStyles: {
                red: {style: {color: '#900'}},
                Bold:{style: {color: 'green'}},
                left:{ style: { 'text-align': 'left' } },
                right:{ style: { 'text-align': 'right' } },
                center:{ style: { 'text-align': 'center' } },
            },
            blockStyleFn: (block) => {
                switch (block.getType()) {
                    case 'blockquote':
                        return {
                            style: {
                                'border-left': '5px solid #eee',
                                color: '#666',
                                'font-family': "'Hoefler Text', 'Georgia', serif",
                                'font-style': 'italic',
                                'margin': '16px 0',
                                'padding': '10px 20px'
                            }
                        };
                    case 'suibian':
                        return { style: { color: 'indianred' } };
                    default: return null;
                }
            },
          }
        let html = stateToHTML(this.state.editorState.getCurrentContent(),options);
        console.log('===>>>>HTML<<<<=====\n',html)
        console.log()
    }
    render(){
        const contentState = this.state.editorState.getCurrentContent();
        let className = 'RichEditor-editor editordiv border';
          if (!contentState.hasText()) {
            if (contentState.getBlockMap().first().getType() !== 'unstyled') {
              className += ' RichEditor-hidePlaceholder';
            }
          }
        return (
            <div className="can">
                <h4>WHEN YOU GET HERE.</h4>
                <div className="col-top"  style={styles.root}>
                    <BlockStyleControls
                        editorState={this.state.editorState}
                        onToggle={this.toggleBlockType}
                    />
                    <InlineStyleControls
                        editorState={this.state.editorState}
                        onToggle={this.toggleInlineStyle}
                    />
                </div>
                <div className={className} onClick={this.focus}>
                    <Editor editorState={this.state.editorState}
                            onChange={this.onChange} 
                            blockStyleFn={getBlockStyle}                         
                            ref="editor"
                            spellCheck={true}
                            handleKeyCommand={this.handleKeyCommand}
                            customStyleMap={colorStyleMap}
                            placeholder="There is nothing..."
                            blockRendererFn={myBlockRenderer}
                    />
                </div>
                <button onClick={this.buttons}>LOOK HERE</button>
            </div>
        )
    }
}
function getBlockStyle(block) {
    switch (block.getType()) {
        case 'blockquote':
            return 'RichEditor-blockquote';
        case 'left':
            return 'left';
        case 'right':
            return 'right';
        case 'center':
            return 'center';
        default:
            return null;
    }
  }
  function myBlockRenderer(contentBlock) {
    const type = contentBlock.getType();
    if (type === 'h1-right') {
      return {
        component: h1R,
        editable: true,
        props: {
          foo: 'bar',
        },
      };
    }
  }


  function  h1R(props){
    return (
      <h1 className="h1enter" >{props.foo}</h1>
    )
  }
class StyleButton extends React.Component {
    constructor() {
      super();
      this.onToggle = e => {
        e.preventDefault();
        this.props.onToggle(this.props.style);
      };
    }
  
    render() {
      let className = 'RichEditor-styleButton';
      if (this.props.active) {
        className += ' RichEditor-activeButton';
      }
  
      return (
        <span className={className} onMouseDown={this.onToggle}>
          {this.props.label}
        </span>
      );
    }
  }
const BLOCK_TYPES = [
    {label: 'H1', style: 'header-one'},
    {label: 'H2', style: 'header-two'},
    {label: 'H3', style: 'header-three'},
    {label: 'Blockquote', style: 'blockquote'},
    {label: 'UL', style: 'unordered-list-item'},
    {label: 'OL', style: 'ordered-list-item'},
    {label: 'Code Block', style: 'code-block'},
    {label: 'CENTER', style: 'center'},
    {label: 'LEFT', style: 'left'},
    {label: 'RIGHT', style: 'right'},
    {label: 'H1-RIGHT', style: 'h1-right'},
  ];
  
  const BlockStyleControls = props => {
    const {editorState} = props;
    const selection = editorState.getSelection();
    const blockType = editorState
      .getCurrentContent()
      .getBlockForKey(selection.getStartKey())
      .getType();
  
    return (
      <div className="RichEditor-controls">
        {BLOCK_TYPES.map(type => (
          <StyleButton
            key={type.label}
            active={type.style === blockType}
            label={type.label}
            onToggle={props.onToggle}
            style={type.style}
            
          />
        ))}
      </div>
    );
  };
  const INLINE_STYLES = [
    {label: 'Bold', style: 'BOLD'},
    {label: 'Italic', style: 'ITALIC'},
    {label: 'Underline', style: 'UNDERLINE'},
    {label: 'Monospace', style: 'CODE'},
    {label: 'Red', style: 'red'},
    {label: 'Orange', style: 'orange'},
    {label: 'Yellow', style: 'yellow'},
    {label: 'Green', style: 'green'},
    {label: 'Blue', style: 'blue'},
    {label: 'Indigo', style: 'indigo'},
    {label: 'Violet', style: 'violet'},
    {label: 'background1', style: 'center'},
    {label: 'background2', style: 'left'},
    {label: 'background3', style: 'right'},
    {label: 'line-through', style: 'lineT'},
    
  ];
  
  const InlineStyleControls = props => {
    const currentStyle = props.editorState.getCurrentInlineStyle();
  
    return (
      <div className="RichEditor-controls">
        {INLINE_STYLES.map(type => (
          <StyleButton
            key={type.label}
            active={currentStyle.has(type.style)}
            label={type.label}
            onToggle={props.onToggle}
            style={type.style}
          />
        ))}
      </div>
    );
  };
  const styles = {
    root: {
      fontFamily: '\'Georgia\', serif',
      fontSize: 14,
      padding: 20,
      width: 600,
    },
    editor: {
      borderTop: '1px solid #ddd',
      cursor: 'text',
      fontSize: 16,
      marginTop: 20,
      minHeight: 400,
      paddingTop: 20,
    },
    controls: {
      fontFamily: '\'Helvetica\', sans-serif',
      fontSize: 14,
      marginBottom: 10,
      userSelect: 'none',
    },
    styleButton: {
      color: '#999',
      cursor: 'pointer',
      marginRight: 16,
      padding: '2px 0',
    },
  };


  const colorStyleMap = {
    red: {
      color: 'rgba(255, 0, 0, 1.0)',
    },
    orange: {
      color: 'rgba(255, 127, 0, 1.0)',
    },
    yellow: {
      color: 'rgba(180, 180, 0, 1.0)',
    },
    green: {
      color: 'rgba(0, 180, 0, 1.0)',
    },
    blue: {
      color: 'rgba(0, 0, 255, 1.0)',
    },
    indigo: {
      color: 'rgba(75, 0, 130, 1.0)',
    },
    violet: {
      color: 'rgba(127, 0, 255, 1.0)',
    },
    left: {
        // textAlign: 'left',
        background:'rgba(127, 0, 255, 1.0)',
        color:'#fff',
    },
    center: {
        // textAlign: 'center',
        color:'#fff',
        background: 'rgba(75, 0, 130, 1.0)',
    },
    right: {
        // direction: 'rtl',
        color:'#fff',
        background:'rgba(0, 0, 255, 1.0)',
    },
    lineT: {
      textDecoration: 'line-through',
    },
  
  };