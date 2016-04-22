import Ember from 'ember';


//['Jon Skeet - #1 in Stack Overflow, Google Dev',
		 //'Gennady Korotkevich - Program Genius', 
		 //'Linus Torvalds - Father of Linux & Git',
		 //'Jeff Dean - Designer of many Google Cloud related system',
		 //'John Carmack - Father of Doom',
		 //'Richard Stallman - Build Emacs...',
		 //'PetrMitrechev - Indian? #1 of TopCoderPetr Arithmetic',
		 //'Fabrice Bellard - QEMU (硬件模拟虚拟平台)',
		 //'Doug Cutting - 开源全文检索引擎工具包Lucene',
		 //'Donald Knuth - 《计算机程序设计艺术》(The Art of Computer Programming)一书的作者',
		 //'Anders Hejlsberg - 创造了Turbo Pascal',
		 //'Ken Thompson - 与Dennis Ritchie一起创造了Unix',
		 //'Adam D\'Angelo - 问答SNS网站Quora的创办人之一',
		 //'Sanjay Ghemawat - Google架构师团队中的核心人物'
		 //]
var devs = [
			{
				name:'Jon Skeet',
				notes:'#1 in Stack Overflow, Google Dev',
				ShopList: ['x', 'y'],
				addItem()
				{this.get("ShopList").pushObject('bacon');}
			},
			{
				name:'Gennady Korotkevich',
				notes:'Program Genius',
				addItem()
				{this.get("ShopList").pushObject('icecream');}
			},
						{
				name:'Jeff Dean',
				notes:'Designer of many Google Cloud related system',
								ShopList: ['x', 'y'],
				addItem()
				{this.get("ShopList").pushObject('bacon');}
			},
						{
				name:'John Carmack',
				notes:'Father of Doom',
								ShopList: ['x', 'y'],
				addItem()
				{this.get("ShopList").pushObject('bacon');}
			},
						{
				name:'Jon Skeet',
				notes:'#1 in Stack Overflow, Google Dev',
								ShopList: ['x', 'y'],
				addItem()
				{this.get("ShopList").pushObject('bacon');}
			},
						{
				name:'Jon Skeet',
				notes:'#1 in Stack Overflow, Google Dev',
								ShopList: ['x', 'y'],
				addItem()
				{this.get("ShopList").pushObject('bacon');}
			},
						{
				name:'Jon Skeet',
				notes:'#1 in Stack Overflow, Google Dev',
				addItem()
				{this.get("ShopList").pushObject('bacon');}
			},
						{
				name:'Jon Skeet',
				notes:'#1 in Stack Overflow, Google Dev',
				addItem()
				{this.get("ShopList").pushObject('bacon');}
			},
						{
				name:'Jon Skeet',
				notes:'#1 in Stack Overflow, Google Dev',
				addItem()
				{this.get("ShopList").pushObject('bacon');}
			},
						{
				name:'Jon Skeet',
				notes:'#1 in Stack Overflow, Google Dev',
				addItem()
				{this.get("ShopList").pushObject('bacon');}
			},
						{
				name:'Jon Skeet',
				notes:'#1 in Stack Overflow, Google Dev',
				addItem()
				{this.get("ShopList").pushObject('bacon');}
			},
						{
				name:'Jon Skeet',
				notes:'#1 in Stack Overflow, Google Dev',
				addItem()
				{this.get("ShopList").pushObject('bacon');}
			},
						{
				name:'Jon Skeet',
				notes:'#1 in Stack Overflow, Google Dev',
				addItem()
				{this.get("ShopList").pushObject('bacon');}
			},
						{
				name:'Jon Skeet',
				notes:'#1 in Stack Overflow, Google Dev',
				addItem()
				{this.get("ShopList").pushObject('bacon');}
			}
];

export default Ember.Route.extend({
	model() {
		return devs;
	}
});