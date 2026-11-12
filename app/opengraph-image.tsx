import {ImageResponse} from 'next/og';
export const alt='Sohan Kathari — Computer science at Carnegie Mellon';
export const size={width:1200,height:630};
export const contentType='image/png';
export default function Image(){return new ImageResponse(<div style={{background:'#0B0D12',color:'#F2F4F8',width:'100%',height:'100%',display:'flex',flexDirection:'column',justifyContent:'center',padding:80}}><div style={{fontSize:22,color:'#9FB4FF',marginBottom:30}}>SELECTED ENGINEERING WORK</div><div style={{fontSize:80,letterSpacing:-4}}>Sohan Kathari</div><div style={{fontSize:32,color:'#A8B1C2',marginTop:24}}>Computer science at Carnegie Mellon.</div><div style={{fontSize:22,color:'#A8B1C2',marginTop:60}}>Autonomous racing · Speech feedback · Food-label scanning</div></div>,size);}
