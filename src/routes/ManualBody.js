import React, { Component } from 'react'
import gaming from '../atom.png'
import pay from '../magic-wand.png'
import monitor from '../monitor.png'
import collaboration from '../collaboration.png'
import './Manual.css'; 
export default class ManualBody extends Component {
    render() {
        return (
           <div> 
            <div className="manual_background" style={{marginTop:170,color:'white'}}>
               <br></br>
               <h1>Business manual</h1>
                <hr style={{borderColor:"gray", marginLeft:500,marginRight:500}}/>
            </div>
       
          
                
         
         <div className="background_color"> 
                <div className="manual_group1">       
                <br></br> <h1>What we do?</h1> 
                   <div className="manual_image1">
                        
                </div>
                   <h7>     
                    이 사이트는 메타마스크에 가입을 해야하며, <br></br>
                    메타마스크를 로그인해서 계정을 연결시켜야
                    게임에 참여할 수 있습니다.<br></br>
                    게임에 참여하는 비용이 있으며 참여하는 비용의<br></br> 일정 부분에서
                    수수료에 따라 차감됩니다.
                   </h7><p></p>
                   <h7> This Site is have to join,
                    login for MetaMask ID should be connected<br></br>
                    this game's can participate.<br></br> 
                    this game's participate payment for fees will be deducted
                   </h7>
                </div> 
          
                    <div className="manual_group2" >  
                        <h1>How we do?</h1>
                        <div className="manual_image2">
                           
                    </div>
                        <h7>     
                        메타마스크에 연결되어 있는 계정의 지갑정보와 <br></br>
                        게임에 참여한 정보 및 수수료가 표시됩니다.</h7><br></br>
                        <h7>
                        화면에 출력되는 참여한 정보는 최근 참여했던 정보로
                        구성되어 있습니다.
                        </h7>
                        <p></p>
                        <h7>
                            Connected MetaMask ID and participate Information to game's
                            this fee's for interface. 
                        </h7>
                        <br></br>
                        <h7>
                            Connected MetaMask ID and participate Information to game's
                            this fee's for interface.
                        </h7> 
                    </div>
                    <br></br>
                    <div className="manual_monitor_about" > 
                    <img src={monitor} className="manual_monitor"/>
                    </div>
                    
                    </div>
                    <div className="monitor_text"  > 
                    <h7>     
                      </h7> <br></br>
                        <h7>
                        
                        </h7>
                        <p></p>
                        <h7>
                            Connected MetaMask ID and participate Information to game's
                            this fee's for interface. 
                        </h7>
                        <br></br>
                        
                    </div>
                    
                    </div> 
     
        
    
                   
              
        )
    }
}