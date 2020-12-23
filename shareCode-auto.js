/*
 * @Author: whyour
 * @Github: https://github.com/whyour
 * @Date: 2020-11-20 10:42:06
 * @LastEditors: whyour
 * @LastEditTime: 2020-11-30 13:12:39
 */
const $ = new Env("互助码");
const shareCodes = [
    {
        zd: $.getdata("zd_shareCode1") || "tvyozifh5adozk2rwtfzezfcoa",
        nc: $.getdata("nc_shareCode1") || "c7fc067839e444d49074aefe62cfcbeb",
        mc: $.getdata("mc_shareCode1") || "MTAxODc2NTEzMjAwMDAwMDAwOTU1NzkyMw==",
        ddgc: $.getdata("dd_shareCode1") || "P04z54XCjVWnYaS5nFPVzetgw",
        jxgc: $.getdata("jx_shareCode1") || "Nw7tHtG2yLEwLu8630y9WA==",
    },
    {
        zd: $.getdata("zd_shareCode2") || "u74ulwsyiyvra46m74o7asq5nu",
        nc: $.getdata("nc_shareCode2") || "dbdde7a321df4602b60d844d7788de62",
        mc: $.getdata("mc_shareCode2") || "MTAxODc2NTE0NzAwMDAwMDAwODkzMjYxNQ==",
        ddgc: $.getdata("dd_shareCode2") || "P04z54XCjVWnYaS5mlRVTn7238",
        jxgc: $.getdata("jx_shareCode2") || "VN9kvLIcPTGYblnz99c2DQ==",
    },
    {
        zd: $.getdata("zd_shareCode3") || "5vvfebbddjz72b3eqwkce3lcem",
        nc: $.getdata("nc_shareCode3") || "5171b942a4ca4715864f9ad2a6b29c6a",
        mc: $.getdata("mc_shareCode3") || "MTAxODc2NTEzMDAwMDAwMDAwNzk1MTA4Mw==",
        ddgc: $.getdata("dd_shareCode3") || "P04z54XCjVWnYaS5jALDWjx2XxPk2kb",
        jxgc: $.getdata("jx_shareCode3") || "YHbpVmCTUGanNGkHQ4eRHw==",
    },
    {
        zd: $.getdata("zd_shareCode4") || "5o7wg3rnvdv4ragqo3ddyjkk5q",
        nc: $.getdata("nc_shareCode4") || "799242246674439eaf0ed2f5c686fc56",
        mc: $.getdata("mc_shareCode4") || "MTAxODc2NTEzOTAwMDAwMDAxMzg2MDQzMQ==",
        ddgc: $.getdata("dd_shareCode4") || "P04z54XCjVWnYaS5m1XTTqhiCAbyZM",
        jxgc: $.getdata("jx_shareCode4") || "u07kejmykeFigM6N2NNfRQ==",
    },
    {
        zd: $.getdata("zd_shareCode5") || "u4ipras7j5mnahqorksiku77ky",
        nc: $.getdata("nc_shareCode5") || "472512b3f5f749798ad7b7a8b5aa9cbe",
        mc: $.getdata("mc_shareCode5") || "MTE1NDAxNzYwMDAwMDAwMzU4ODQ2NTU=",
        ddgc: $.getdata("dd_shareCode5") || "P04z54XCjVWnYaS5lZsdx6NwBU_",
        jxgc: $.getdata("jx_shareCode5") || "uSi-cdO9p5ChgTetY7L4wQ==",
    },
    {
        zd: $.getdata("zd_shareCode6") || "oy5w3pdbzhvn6arznfmurxten6wwje5n636mt3i",
        nc: $.getdata("nc_shareCode6") || "04bf9ac462054badab6b4557d3f30735",
        mc: $.getdata("mc_shareCode6") || "MTAxODc2NTEzMjAwMDAwMDAwNzcwMDc5OQ==",
        ddgc: $.getdata("dd_shareCode6") || "P04z54XCjVWnYaS5nJcYhaihgks9quwPDUU",
        jxgc: $.getdata("jx_shareCode6") || "YmpEBYwVcUsuvO7bA8zNwQ==",
    },
    {
        zd: $.getdata("zd_shareCode7") || "scrkrtbwkrfbc3tuynr5ydvhbq",
        nc: $.getdata("nc_shareCode7") || "3f4bb089e6254f90bb9bf92fce79ca8c",
        mc: $.getdata("mc_shareCode7") || "MTAxODc2NTEzOTAwMDAwMDAzMTY3MTM3Nw==",
        ddgc: $.getdata("dd_shareCode7") || "P04z54XCjVWnYaS5uOMo7ZUR6n1Ew",
        jxgc: $.getdata("jx_shareCode7") || "VFnVfYoknvTanuxr_Dsizw==",
    },
    {
        zd: $.getdata("zd_shareCode8") || "e7lhibzb3zek3mgg62vemym7tvpg6p4jii4xoni",
        nc: $.getdata("nc_shareCode8") || "63452ae3da004f95bd82af04ac84f165",
        mc: $.getdata("mc_shareCode8") || "MTE1NDUyMjEwMDAwMDAwNDI3NjMzODU=",
        ddgc: $.getdata("dd_shareCode8") || "P04z54XCjVWnYaS5m9cZ2StjChNnOdh5wHloEs",
        jxgc: $.getdata("jx_shareCode8") || "OtsmlozqNaT-1tmEWBdIjQ==",
    },
];
$.result = [];
$.random = Math.floor(Math.random() * 60);

!(async () => {
    console.log(`\n此脚本延迟${$.random}秒执行\n`);
    for (let i = 0; i < shareCodes.length; i++) {
        const { zd, nc, mc, ddgc, jxgc } = shareCodes[i];
        await $.wait($.random);
        zd &&
            (await create(
                `http://api.turinglabs.net/api/v1/jd/bean/create/${zd}/`,
                "种豆得豆"
            ));
        await $.wait($.random);
        nc &&
            (await create(
                `http://api.turinglabs.net/api/v1/jd/farm/create/${nc}/`,
                "东东农场"
            ));
        await $.wait($.random);
        mc &&
            (await create(
                `http://api.turinglabs.net/api/v1/jd/pet/create/${mc}/`,
                "东东萌宠"
            ));
        await $.wait($.random);
        ddgc &&
            (await create(
                `http://api.turinglabs.net/api/v1/jd/ddfactory/create/${ddgc}/`,
                "东东工厂"
            ));
        await $.wait($.random);
        jxgc &&
            (await create(
                `http://api.turinglabs.net/api/v1/jd/jxfactory/create/${jxgc}/`,
                "京喜工厂"
            ));
    }
    await showMsg();
})()
    .catch((e) => $.logErr(e))
    .finally(() => $.done());

function create(path, name) {
    return new Promise((resolve) => {
        const url = { url: path };
        $.get(url, async (err, resp, data) => {
            if (err) {
                $.log(JSON.stringify(err));
                resolve(err);
                return;
            }
            try {
                const needAgain = await checkWhetherNeedAgain(resp, create, path, name);
                if (needAgain) return;
                const { message } = JSON.parse(data);
                $.log(`\n${message}\n${data}`);
                $.result.push(`${name}： ${message}`);
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve();
            }
        });
    });
}

function checkWhetherNeedAgain(resp, fun, url, name) {
    return new Promise(async (resolve) => {
        if ((resp && resp.statusCode !== 200) || !resp.body) {
            await $.wait($.random);
            await fun(url, name);
            resolve(true);
        } else {
            resolve(false);
        }
    });
}

function showMsg() {
    return new Promise((resolve) => {
        $.msg($.name, "", $.result.join("\n"));
        resolve();
    });
}

// prettier-ignore
function Env(t, e) { class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), a = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(a, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t) { let e = { "M+": (new Date).getMonth() + 1, "d+": (new Date).getDate(), "H+": (new Date).getHours(), "m+": (new Date).getMinutes(), "s+": (new Date).getSeconds(), "q+": Math.floor(((new Date).getMonth() + 3) / 3), S: (new Date).getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length))); for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }