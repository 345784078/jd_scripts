/*
/*
京东抽奖机
京东抽奖机
更新时间：2020-12-20 08:04
更新时间：2020-12-22 14:34
脚本说明：抽奖活动，【新店福利】【闪购盲盒】【疯狂砸金蛋】【健康服务】，点通知只能跳转一个，入口在京东APP玩一玩里面可以看到
脚本说明：抽奖活动，【新店福利】【闪购盲盒】【疯狂砸金蛋】【健康服务】【砸蛋抽好礼】，点通知只能跳转一个，入口在京东APP玩一玩里面可以看到
　　　　　临时活动【FANCL】
脚本兼容: QuantumultX, Surge, Loon, JSBox, Node.js
脚本兼容: QuantumultX, Surge, Loon, JSBox, Node.js
// quantumultx
// quantumultx
[task_local]
[task_local]
@@ -18,15 +17,14 @@ const $ = new Env('京东抽奖机');
//Node.js用户请在jdCookie.js处填写京东ck;
//Node.js用户请在jdCookie.js处填写京东ck;
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
const STRSPLIT = "|";
const STRSPLIT = "|";
const needSum = false;     //是否需要显示汇总
const needSum = false;            //是否需要显示汇总
const printDetail = false;        //是否显示出参详情
const printDetail = false;        //是否显示出参详情
const appIdArr = ['1EFRQxA','1EFRRxA','1EFRQwA','1EFRTwg','1EFRTyg','1EFRSwA']//'1EFRQyg'//'1EFRTwA','P04z54XCjVXloaW5m9cZ2f433tIlH_LzLLVOp8','P04z54XCjVUnIaW5m9cZ2f433tIlJeCjGuzPCI'//,'1EFRTxw'
const appIdArr = ['1EFRRxA','1EFRQwA','1EFRTwg','1EFRTyg','1EFRSxw','1EFRTxQ']
//const shareCodeArr = ['P04z54XCjVXmIaW5m9cZ2f433tIlGWEga-IO2o','P04z54XCjVWmIaW5m9cZ2f433tIlJz4FjX2kfk','P04z54XCjVXnIaW5m9cZ2f433tIlLKXiUijZw4','P04z54XCjVUnoaW5m9cZ2f433tIlIcU3mmrus8','P04z54XCjVUloaW5m9cZ2f433tIlNDtvQURO58','P04z54XCjVVnIaW5m9cZ2f433tIlNDt16wa89Q']//'P04z54XCjVUm4aW5m9cZ2f433tIlID9Pfij_eg'
const shareCodeArr = ['P04z54XCjVWmIaW5m9cZ2f433tIlJz4FjX2kfk','P04z54XCjVXnIaW5m9cZ2f433tIlLKXiUijZw4','P04z54XCjVUnoaW5m9cZ2f433tIlIcU3mmrus8','P04z54XCjVUloaW5m9cZ2f433tIlNDtvQURO58','P04z54XCjVVm4aW5m9cZ2f433tIlARS0JQxxfc','T0225KkcRx4b8lbWJU72wvZZcwCjVUmYaW5kRrbA']
const shareCodeArr = ['P04z54XCjVUnoaW5nJcYhaihgks9uUmxpk6','P04z54XCjVWmIaW5nFPVzetgw','P04z54XCjVXnIaW5nFPVzetgw','P04z54XCjVUnoaW5nFPVzetgw','P04z54XCjVUloaW5nFPVzetgw','P04z54XCjVVnIaW5nFPVzetgw']
const homeDataFunPrefixArr = ['','','healthyDay','healthyDay','healthyDay','ts']
const homeDataFunPrefixArr = ['','','','healthyDay','healthyDay','healthyDay']//,
const collectScoreFunPrefixArr = ['','','','','']
const collectScoreFunPrefixArr = ['','','','','']
const lotteryResultFunPrefixArr = ['','','','interact_template','interact_template','interact_template']
const lotteryResultFunPrefixArr = ['','','interact_template','interact_template','interact_template','ts']
const browseTimeArr = ['','','','15','','10']
const browseTimeArr = ['','','15','','6','']
let merge = {}
let merge = {}
//IOS等用户直接用NobyDa的jd cookie
//IOS等用户直接用NobyDa的jd cookie
let cookiesArr = [], cookie = '';
let cookiesArr = [], cookie = '';
@@ -70,13 +68,13 @@ const JD_API_HOST = `https://api.m.jd.com/client.action`;
        //break
        //break
      }
      }
      await msgShow();
      await msgShow();
      //break
    }
    }
  }
  }
})()
})()
  .catch((e) => $.logErr(e))
  .catch((e) => $.logErr(e))
  .finally(() => $.done())
  .finally(() => $.done())



//获取昵称
//获取昵称
function QueryJDUserInfo(timeout = 0) {
function QueryJDUserInfo(timeout = 0) {
  return new Promise((resolve) => {
  return new Promise((resolve) => {
@@ -105,8 +103,7 @@ function QueryJDUserInfo(timeout = 0) {
    },timeout)
    },timeout)
  })
  })
}
}

//获取活动信息

function interact_template_getHomeData(timeout = 0) {
function interact_template_getHomeData(timeout = 0) {
  return new Promise((resolve) => {
  return new Promise((resolve) => {
    setTimeout( ()=>{
    setTimeout( ()=>{
@@ -124,6 +121,7 @@ function interact_template_getHomeData(timeout = 0) {
        },
        },
        body : `functionId=${homeDataFunPrefix}_getHomeData&body={"appId":"${appId}","taskToken":""}&client=wh5&clientVersion=1.0.0`
        body : `functionId=${homeDataFunPrefix}_getHomeData&body={"appId":"${appId}","taskToken":""}&client=wh5&clientVersion=1.0.0`
      }
      }
      if (appId === "1EFRTxQ") url.body += "&appid=golden-egg"
      $.post(url, async (err, resp, data) => {
      $.post(url, async (err, resp, data) => {
        try {
        try {
          if (printDetail) console.log(data);
          if (printDetail) console.log(data);
@@ -135,6 +133,7 @@ function interact_template_getHomeData(timeout = 0) {
            return
            return
          }
          }
          scorePerLottery = data.data.result.userInfo.scorePerLottery||data.data.result.userInfo.lotteryMinusScore
          scorePerLottery = data.data.result.userInfo.scorePerLottery||data.data.result.userInfo.lotteryMinusScore
          if (data.data.result.raiseInfo) scorePerLottery = data.data.result.raiseInfo.levelList[data.data.result.raiseInfo.scoreLevel];
          //console.log(scorePerLottery)
          //console.log(scorePerLottery)
          for (let i = 0;i < data.data.result.taskVos.length;i ++) {
          for (let i = 0;i < data.data.result.taskVos.length;i ++) {
            console.log("\n" + data.data.result.taskVos[i].taskType + '-' + data.data.result.taskVos[i].taskName  + '-' + (data.data.result.taskVos[i].status === 1 ? `已完成${data.data.result.taskVos[i].times}-未完成${data.data.result.taskVos[i].maxTimes}` : "全部已完成"))
            console.log("\n" + data.data.result.taskVos[i].taskType + '-' + data.data.result.taskVos[i].taskName  + '-' + (data.data.result.taskVos[i].status === 1 ? `已完成${data.data.result.taskVos[i].times}-未完成${data.data.result.taskVos[i].maxTimes}` : "全部已完成"))
@@ -150,11 +149,15 @@ function interact_template_getHomeData(timeout = 0) {
              }
              }
              continue
              continue
            }
            }
            if ([14,6].includes(data.data.result.taskVos[i].taskType)) {'data.data.result.taskVos[i].assistTaskDetailVo.taskToken'
            if ([14,6].includes(data.data.result.taskVos[i].taskType)) {
              console.log(data.data.result.taskVos[i].assistTaskDetailVo.taskToken)
              console.log(data.data.result.taskVos[i].assistTaskDetailVo.taskToken)
              await harmony_collectScore(shareCode,data.data.result.taskVos[i].taskId);
              if (shareCode) await harmony_collectScore(shareCode,data.data.result.taskVos[i].taskId);
              for (let j = 0;j <(data.data.result.userInfo.lotteryNum||0);j++) {
              for (let j = 0;j <(data.data.result.userInfo.lotteryNum||0);j++) {
                await interact_template_getLotteryResult(data.data.result.taskVos[i].taskId);
                if (appId === "1EFRTxQ") {
                  await ts_smashGoldenEggs()
                }  else {
                  await interact_template_getLotteryResult(data.data.result.taskVos[i].taskId);
                }
              }
              }
              continue
              continue
            }
            }
@@ -167,7 +170,6 @@ function interact_template_getHomeData(timeout = 0) {
                  //console.log(list[j].itemId)
                  //console.log(list[j].itemId)
                  if (list[j].itemId) {
                  if (list[j].itemId) {
                    await harmony_collectScore(list[j].taskToken,data.data.result.taskVos[i].taskId,list[j].itemId,1);
                    await harmony_collectScore(list[j].taskToken,data.data.result.taskVos[i].taskId,list[j].itemId,1);
                    await harmony_collectScore(list[j].taskToken,data.data.result.taskVos[i].taskId,list[j].itemId,0,parseInt(browseTime) * 1000);
                    if (k === data.data.result.taskVos[i].maxTimes - 1) await interact_template_getLotteryResult(data.data.result.taskVos[i].taskId);
                    if (k === data.data.result.taskVos[i].maxTimes - 1) await interact_template_getLotteryResult(data.data.result.taskVos[i].taskId);
                  } else {
                  } else {
                    await harmony_collectScore(list[j].taskToken,data.data.result.taskVos[i].taskId)
                    await harmony_collectScore(list[j].taskToken,data.data.result.taskVos[i].taskId)
@@ -181,6 +183,9 @@ function interact_template_getHomeData(timeout = 0) {
            }
            }
          }
          }
          if (scorePerLottery) await interact_template_getLotteryResult();
          if (scorePerLottery) await interact_template_getLotteryResult();
          for (let j = 0;j <(data.data.result.userInfo.lotteryNum||0 && appId === "1EFRTxQ");j++) {
              await ts_smashGoldenEggs()
          }
        } catch (e) {
        } catch (e) {
          $.logErr(e, resp);
          $.logErr(e, resp);
        } finally {
        } finally {
@@ -190,8 +195,7 @@ function interact_template_getHomeData(timeout = 0) {
    },timeout)
    },timeout)
  })
  })
}
}

//做任务

function harmony_collectScore(taskToken,taskId,itemId = "",actionType = 0,timeout = 0) {
function harmony_collectScore(taskToken,taskId,itemId = "",actionType = 0,timeout = 0) {
  return new Promise((resolve) => {
  return new Promise((resolve) => {
    setTimeout( ()=>{
    setTimeout( ()=>{
@@ -210,11 +214,15 @@ function harmony_collectScore(taskToken,taskId,itemId = "",actionType = 0,timeou
        body : `functionId=${collectScoreFunPrefix}_collectScore&body={"appId":"${appId}","taskToken":"${taskToken}","taskId":${taskId}${itemId ? ',"itemId":"'+itemId+'"' : ''},"actionType":${actionType}&client=wh5&clientVersion=1.0.0`
        body : `functionId=${collectScoreFunPrefix}_collectScore&body={"appId":"${appId}","taskToken":"${taskToken}","taskId":${taskId}${itemId ? ',"itemId":"'+itemId+'"' : ''},"actionType":${actionType}&client=wh5&clientVersion=1.0.0`
      }
      }
      //console.log(url.body)
      //console.log(url.body)
      if (appId === "1EFRTxQ") url.body += "&appid=golden-egg"
      $.post(url, async (err, resp, data) => {
      $.post(url, async (err, resp, data) => {
        try {
        try {
          if (printDetail) console.log(data);
          if (printDetail) console.log(data);
          data = JSON.parse(data);
          data = JSON.parse(data);
          console.log(data.data.bizMsg)
          console.log(data.data.bizMsg)
          if (data.data.bizMsg === "任务领取成功") {
            await harmony_collectScore(taskToken,taskId,itemId,0,parseInt(browseTime) * 1000);
          }
        } catch (e) {
        } catch (e) {
          $.logErr(e, resp);
          $.logErr(e, resp);
        } finally {
        } finally {
@@ -224,7 +232,7 @@ function harmony_collectScore(taskToken,taskId,itemId = "",actionType = 0,timeou
    },timeout)
    },timeout)
  })
  })
}
}
//
//抽奖
function interact_template_getLotteryResult(taskId,timeout = 0) {
function interact_template_getLotteryResult(taskId,timeout = 0) {
  return new Promise((resolve) => {
  return new Promise((resolve) => {
    setTimeout( ()=>{
    setTimeout( ()=>{
@@ -243,6 +251,7 @@ function interact_template_getLotteryResult(taskId,timeout = 0) {
        body : `functionId=${lotteryResultFunPrefix}_getLotteryResult&body={"appId":"${appId}"${taskId ? ',"taskId":"'+taskId+'"' : ''}}&client=wh5&clientVersion=1.0.0`
        body : `functionId=${lotteryResultFunPrefix}_getLotteryResult&body={"appId":"${appId}"${taskId ? ',"taskId":"'+taskId+'"' : ''}}&client=wh5&clientVersion=1.0.0`
      }
      }
      //console.log(url.body)
      //console.log(url.body)
      if (appId === "1EFRTxQ") url.body = `functionId=ts_getLottery&body={"appId":"${appId}"${taskId ? ',"taskId":"'+taskId+'"' : ''}}&client=wh5&clientVersion=1.0.0&appid=golden-egg`
      $.post(url, async (err, resp, data) => {
      $.post(url, async (err, resp, data) => {
        try {
        try {
          if (printDetail) console.log(data);
          if (printDetail) console.log(data);
@@ -260,6 +269,7 @@ function interact_template_getLotteryResult(taskId,timeout = 0) {
              console.log('红包:' + data.data.result.userAwardsCacheDto.redPacketVO.value)
              console.log('红包:' + data.data.result.userAwardsCacheDto.redPacketVO.value)
              merge.redPacket.prizeCount += parseFloat(data.data.result.userAwardsCacheDto.redPacketVO.value)
              merge.redPacket.prizeCount += parseFloat(data.data.result.userAwardsCacheDto.redPacketVO.value)
            }
            }
            if (data.data.result.raiseInfo) scorePerLottery = parseInt(data.data.result.raiseInfo.nextLevelScore);
            if (parseInt(data.data.result.userScore) >= scorePerLottery && scorePerLottery) {
            if (parseInt(data.data.result.userScore) >= scorePerLottery && scorePerLottery) {
              await interact_template_getLotteryResult(1000)
              await interact_template_getLotteryResult(1000)
            }
            }
@@ -278,9 +288,43 @@ function interact_template_getLotteryResult(taskId,timeout = 0) {
    },timeout)
    },timeout)
  })
  })
}
}
