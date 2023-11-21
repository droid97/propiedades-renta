fetch('/api/test', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "XSRF-TOKEN": `KBPfL5WT-P1ypX_y28weWKiL4IZY7bvr06Lo`
    },
    body: JSON.stringify({ hello: 'world' })
  }).then(res => res.json()).then(data => console.log(data));
