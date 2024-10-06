const { schedule } = require("@netlify/functions");

// To learn about scheduled functions and supported cron extensions,
// see: https://ntl.fyi/sched-func
module.exports.handler = schedule("* * * * *", async (event) => {
  const eventBody = JSON.parse(event.body);
  console.log(`Next function run at ${eventBody.next_run}.`);
  await fetch("https://dmbi-server.onrender.com/store/store").then(() => {
    console.log("Fetched to dmb server!");
  });

  return {
    statusCode: 200,
  };
});
