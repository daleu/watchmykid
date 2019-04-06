import React, { Component } from 'react';
import { IConfigPageState } from './IConfigPageState';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import '../../styles.css';
import { Storage } from '../../utils/storage';

class ConfigPage extends React.Component<{}, IConfigPageState> {

    private chrome: any;

    constructor(props:any){
        super(props);
        
        this.state = {
            active: false,
            mobilenumber: ''
        }

    }

    public render() {
      return (
        <div className="container">
            <FormControl className="form">
                <FormLabel className="form_title" >Config this extension:</FormLabel>
                <FormGroup>
                <TextField
                    label="Mobile Number"
                    value={this.state.mobilenumber}
                    onChange={this.mobileChanged.bind(this)}
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    margin="normal"
                    disabled={this.state.active}
                />
                <FormControlLabel
                    control={
                        <Switch
                            checked={this.state.active}
                            onChange={this.handleChange.bind(this)}
                            disabled={!(this.state.mobilenumber.length==9)}
                            />
                    }
                    label="Active"
                />
                </FormGroup>
            </FormControl>
        </div>
      );
    }

    public componentDidMount(){

        // this.chrome.storage.local.get(['watchmykid'], (itemString:any) => {
        //     console.log("item",itemString);
        //     if(itemString==null){
        //         this.setState({
        //             active: false,
        //             mobilenumber: ''
        //         });
        //     }
        //     else{
        //         let item:IConfigPageState =  JSON.parse(itemString || '{}');
        //         this.setState({
        //             active: item.active,
        //             mobilenumber: item.mobilenumber
        //         });
        //     }
        // });

        Storage.get((item:any) => {
            console.log("PROVA",item);
            if(item==null){
                this.setState({
                    active: false,
                    mobilenumber: ''
                });
            }
            else{
                let itemAux:IConfigPageState =  item.watchmykid
                this.setState({
                    active: itemAux.active,
                    mobilenumber: itemAux.mobilenumber
                });
            }
        });

        // let itemString:any = localStorage.getItem('watchmykid');
        // console.log("item",itemString);
        // if(itemString==null){
        //     this.setState({
        //         active: false,
        //         mobilenumber: ''
        //     });
        // }
        // else{
        //     let item:IConfigPageState =  JSON.parse(itemString || '{}');
        //     this.setState({
        //         active: item.active,
        //         mobilenumber: item.mobilenumber
        //     });
        // }
    }

    handleChange = (event:any)=>{
        this.setState({active:!this.state.active});
        var stateAux = {
            active: !this.state.active,
            mobilenumber: this.state.mobilenumber
        }

        Storage.set(stateAux);

        localStorage.setItem('watchmykid',JSON.stringify(stateAux));
    }

    mobileChanged(e: any){
        this.setState({mobilenumber: e.target.value});
    }

  }
  
  export default ConfigPage;
  