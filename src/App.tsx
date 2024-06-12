import { useState } from 'react';
import './App.css';
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://urwdvetirkafraxpsnif.supabase.co/';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVyd2R2ZXRpcmthZnJheHBzbmlmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgxODA4ODEsImV4cCI6MjAzMzc1Njg4MX0.eyKC0o6E6Xz3rj6WBFoyyw6s0qdjyou_Jw1A9sBM3UY';
const supabase = createClient(supabaseUrl, supabaseKey);

function App() {
  const [phone,setPhone] = useState<string>('');

  const getData = async(phone : string) => {
    const { data, error } = await supabase.auth.signInWithOtp({
      phone:`+${phone}`
    });
    console.log(data,error);
  };

  return <>
  <input type="text" onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setPhone(e.target.value)} />
  <button onClick={()=>getData(phone)}>Send OTP</button>
  </>;
}

export default App;
