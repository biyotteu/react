function App() {
  return (
  <div style={{width:'100%',display:'flex',flexDirection:'column'}}>
    <div style={{width:'100%',display:'flex',alignItems:'center',justifyContent:'space-between',padding:'16px 24px',margin:'0px 0px 16px',borderBottom:'1px solid #dee2e6',boxShadow:'0 0.25rem 0.75rem rgb(0 0 0 / 5%)'}}>
      <div style={{fontSize:'1.25rem',fontWeight:'400!important'}}>
        Company name
      </div>
      <div style={{display:'flex'}}>
        <div style={{ padding:'8px',fontSize:'1rem'}}>Features</div>   
        <div style={{ padding:'8px',fontSize:'1rem'}}>Enterprise</div>
        <div style={{ padding:'8px',fontSize:'1rem'}}>Support</div>
        <div style={{ padding:'8px',fontSize:'1rem'}}>Pricing</div>
        <div style={{ padding:'.375rem .75rem',marginLeft:'1rem',fontSize:'1rem',color:'#007bff',boxSizing:'border-box',border:'1px solid #007bff',borderRadius:'.25rem'}}>Sign up</div>
      </div>
    </div>
    <div style={{textAlign:'center',padding:'3rem 0 1.5rem 0'}}>
      <div style={{fontSize:'3.5rem',fontWeight:'300',marginBottom:'.5rem'}}>Pricing</div>
      <div style={{fontSize:'1.25rem',fontWeight:'300'}}>
        <div>Quickly build an effective pricing table for your potential customers with this</div>
        <div>Bootstrap example. It's built with default Bootstrap components and utilities with</div>
        <div>little customization.</div>
      </div>
    </div>
    <div style={{width:'100%',display:'flex',justifyContent:'center',textAlign:'center'}}>
      <div style={{minWidth:'220px',display:'flex',flexDirection:'column',boxShadow:'0 0.25rem 0.75rem rgb(0 0 0 / 5%)',margin:'0 15px 0 15px'}}>
        <div style={{background:'rgba(0,0,0,.03)',padding:'.75rem 1.25rem',borderRadius:'calc(.25rem - 1px) calc(.25rem - 1px) 0 0',border:'1px solid rgba(0,0,0,.125)',fontSize:'1.5rem',fontWeight:'400',lineHeight:'1.5'}}>Free</div>
        <div style={{display:'flex',justifyContent:'center',flexDirection:'column',padding:'1.25rem'}}>
          <div style={{display:'flex',fontSize:'2.5rem',justifyContent:'center',fontWeight:'bold',marginBottom:'12px'}}>$0<div style={{margin:'8px 0 0 15px',fontWeight:'400',fontSize:'80%',color:'#6c757d'}}>/ mo</div></div>
          <div style={{marginBottom:'1.5rem'}}>
            <div>10 users included</div>
            <div>2 GB of storage</div>
            <div>Email support</div>
            <div>Help center access</div>
          </div>
          <div style={{width:'100%' ,padding:'.5rem 1rem',fontSize:'1.25rem',color:'#007bff',boxSizing:'border-box',border:'1px solid #007bff',borderRadius:'.25rem'}}>Sign up for free</div>
        </div>
      </div>
      <div style={{minWidth:'220px',display:'flex',flexDirection:'column',boxShadow:'0 0.25rem 0.75rem rgb(0 0 0 / 5%)',margin:'0 15px 0 15px'}}>
        <div style={{background:'rgba(0,0,0,.03)',padding:'.75rem 1.25rem',borderRadius:'calc(.25rem - 1px) calc(.25rem - 1px) 0 0',border:'1px solid rgba(0,0,0,.125)',fontSize:'1.5rem',fontWeight:'400',lineHeight:'1.5'}}>Pro</div>
        <div style={{display:'flex',justifyContent:'center',flexDirection:'column',padding:'1.25rem'}}>
          <div style={{display:'flex',fontSize:'2.5rem',justifyContent:'center',fontWeight:'bold',marginBottom:'12px'}}>$15<div style={{margin:'8px 0 0 15px',fontWeight:'400',fontSize:'80%',color:'#6c757d'}}>/ mo</div></div>
          <div style={{marginBottom:'1.5rem'}}>
            <div>20 users included</div>
            <div>10 GB of storage</div>
            <div>Priority email support</div>
            <div>Help center access</div>
          </div>
          <div style={{width:'100%' ,padding:'.5rem 1rem',fontSize:'1.25rem',color:'#fff',boxSizing:'border-box',border:'1px solid #0062c',borderRadius:'.25rem',background:'#0069d9'}}>Get started</div>
        </div>
      </div>
      <div style={{minWidth:'220px',display:'flex',flexDirection:'column',boxShadow:'0 0.25rem 0.75rem rgb(0 0 0 / 5%)',margin:'0 15px 0 15px'}}>
        <div style={{background:'rgba(0,0,0,.03)',padding:'.75rem 1.25rem',borderRadius:'calc(.25rem - 1px) calc(.25rem - 1px) 0 0',border:'1px solid rgba(0,0,0,.125)',fontSize:'1.5rem',fontWeight:'400',lineHeight:'1.5'}}>Enterprise</div>
        <div style={{display:'flex',justifyContent:'center',flexDirection:'column',padding:'1.25rem'}}>
          <div style={{display:'flex',fontSize:'2.5rem',justifyContent:'center',fontWeight:'bold',marginBottom:'12px'}}>$29<div style={{margin:'8px 0 0 15px',fontWeight:'400',fontSize:'80%',color:'#6c757d'}}>/ mo</div></div>
          <div style={{marginBottom:'1.5rem'}}>
            <div>30 users included</div>
            <div>15 GB of storage</div>
            <div>Phone and email support</div>
            <div>Help center access</div>
          </div>
          <div style={{width:'100%' ,padding:'.5rem 1rem',fontSize:'1.25rem',color:'#fff',boxSizing:'border-box',border:'1px solid #0062c',borderRadius:'.25rem',background:'#0069d9'}}>Contact us</div>
        </div>
      </div>
      <div></div>
      <div></div>
      
    </div>
  </div>);
}

export default App;
