import { segment } from "oicq";
import fetch from 'node-fetch'
import schedule from "node-schedule";
import moment from "moment";
import plugin from '../../lib/plugins/plugin.js';


export class example extends plugin {
  constructor () {
    super({
      /** 功能名称 */
      name: '打他',
      /** 功能描述 */
      dsc: '简单开发示例',
      /** https://oicqjs.github.io/oicq/#events */
	  /** https://github.com/huzwu/hithim-plugin.git */
      event: 'message',
      /** 优先级，数字越小等级越高 */
      priority: 5000,
      rule: [
        {
          /** 命令正则匹配 */
          reg: '^打他.*$',
          /** 执行方法 */
          fnc: 'hithim'
        },
	  {
          /** 命令正则匹配 */
          reg: '^回血.*$',
          /** 执行方法 */
          fnc: 'reback'
        }
	  ]
    })
  }
  
  async hithim (e) {
	  var GayCD = {};
	  const cd = 1;  //设置冷却时间，单位为分钟
      let id = e.group_id + e.user_id;
     
      if (GayCD[id]) {
        e.reply(`该命令有${cd}分钟冷却时间!`);
        return true;
      }
     
      let qq2 = e.user_id;
      let qq = null;
     
      for (let msg of e.message) {
     
        if (msg.type == 'at') {
          qq = msg.qq;
          break;
        }
      }
     
      if (qq == null) {
        e.reply("未识别成功,请艾特对方使用");
        return true;
      }
     
      let num1 = Math.round(Math.random() * 100 * 1.1);
      let num2 = Math.round(Math.random() * 100 / 1.1);
	  let num3 = Math.round();
	  let num4 = Math.round();
	  
     
      if (num1 < num2) {
		  if(num3 > num4){
			  e.reply(`你触发了背刺暴击,击穿了他的圣遗物,因此你受到${num1}点伤害,对方受到${num2}点伤害,大胜！`)
			  e.group.muteMember(qq2, num1);
			  e.group.muteMember(qq, num2 * 2);
		  } else if (num3 < num4) {
			  e.reply(`你抽到六星火神班尼特，火焰亮瞎了对手的双眼,因此你受到${num1}点伤害,对方受到${num2}点伤害,大胜！`)
			  e.group.muteMember(qq2, num1);
			  e.group.muteMember(qq, num2 * 2);
		  } else {
			  e.reply(`你成功开启魔王武装,击穿了对手的生命头,因此你受到${num1}点伤害,对方受到${num2}点伤害,大胜！`)
			  e.group.muteMember(qq2, num1);
			  e.group.muteMember(qq, num2 * 2);
		  }  
        
      } else if (num1 > num2) {
		  	  if(num3 > num4){
                    e.reply(`你圣遗物点满了小公鸡,他专武爆伤高达2500%,因此你受到${num1}点伤害,对方受到${num2}点伤害,大败！`)
                    e.group.muteMember(qq2, num1 * 2);
                    e.group.muteMember(qq, num2);
		     } else if (num3 < num4) {
		        	e.reply(`你抽到六星火神班尼特，从天而降的石头打晕了班尼特,因此你受到${num1}点伤害,对方受到${num2}点伤害,大败！`)
		        	e.group.muteMember(qq2, num1);
		        	e.group.muteMember(qq, num2 * 2);
		       } else {
		        	e.reply(`你成功强化满天赋,奈何对方开启了祸津御建鸣神命,因此你受到${num1}点伤害,对方受到${num2}点伤害,大败！`)
		        	e.group.muteMember(qq2, num1);
		        	e.group.muteMember(qq, num2 * 2);
		  }

      } else {
        e.reply(`你触发了替身攻击，他触发了完美弹反,因此你受到${num1}点伤害,对方受到${num2}点伤害,同归于尽！`)
        e.group.muteMember(qq2, num1);
        e.group.muteMember(qq, num2);
      }
     
      GayCD[id] = true;
     
      GayCD[id] = setTimeout(() => {
        if (GayCD[id]) {
          delete GayCD[id];
        }
      }, cd * 60 * 1000)
      //执行的逻辑功能
     
      return true; //返回true
      }
  
  async reback (e) {
	  let qq = null

  for (let msg of e.message) {

    if (msg.type == 'at') {
      qq = msg.qq
      break

    }
  }

  if (qq == null) {
    e.reply("未识别成功,请艾特对方使用");
    return true
  }

  e.group.muteMember(qq, 0);

  return true;
  }
}
