import*as e from"./wasm/llama.js";var t={d:(e,a)=>{for(var o in a)t.o(a,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:a[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const a=(o={default:()=>e.default},n={},t.d(n,o),n);var o,n;const l=[/main:.*/,/.*_model_load:.*/];let s;const r=e=>{console.log("model:"+e),(e=>{for(var t=0;t<l.length;t+=1)if(l[t].test(e))return!1;return!0})(e)&&postMessage({event:3,line:e})},d=async e=>{const t={noInitialRun:!0,print:r};s=await(0,a.default)(t),function(e,t){const a=new XMLHttpRequest;a.open("GET",e,!0),a.responseType="arraybuffer",a.onload=e=>{const t=a.response;if(t){const e=new Uint8Array(t);o=e,s.FS_createPath("/","models",!0,!0),s.FS_createDataFile("/models","model.bin",o,!0,!0,!0),postMessage({event:1}),console.log("model: Loaded")}var o},a.send(null)}(e)};self.addEventListener("message",(e=>{switch(e.data.event){case 0:d(e.data.url);break;case 2:((e,t,a,o,n,l,r,d)=>{console.log(t);const p=["-p",e.toString(),"-n",a.toString(),"--top_k",o.toString(),"--top_p",n.toString(),"--temp",l.toString(),"-m","/models/model.bin"];console.log("model: calling main..."),s.callMain(p),postMessage({event:4}),console.log("model: Completed")})(e.data.prompt,e.data.seed,e.data.max_token_len,e.data.top_k,e.data.top_p,e.data.temp,e.data.repeat_last_n,e.data.repeat_penalty)}}),!1);