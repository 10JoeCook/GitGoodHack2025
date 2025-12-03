const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Bullet,
		C3.Behaviors.EightDir,
		C3.Behaviors.bound,
		C3.Plugins.Text,
		C3.Plugins.TiledBg,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.System.Exps.random,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.System.Cnds.Else,
		C3.Plugins.System.Cnds.CompareBoolVar,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.System.Exps.dt,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.SubVar,
		C3.Behaviors.EightDir.Acts.SetSpeed,
		C3.Plugins.Sprite.Cnds.OnCreated,
		C3.Plugins.Sprite.Acts.SetAnimFrame
	];
};
self.C3_JsPropNameTable = [
	{Bullet: 0},
	{Bug: 0},
	{Feature: 0},
	{"8Direction": 0},
	{BoundToLayout: 0},
	{Engineer: 0},
	{Scoreboard: 0},
	{GoldenFeature: 0},
	{TiledBackground: 0},
	{Boundry: 0},
	{SpawnFrequency: 0},
	{GravityStrength: 0},
	{Score: 0},
	{Clock: 0},
	{GameOver: 0},
	{Bugs: 0}
];

self.InstanceType = {
	Bug: class extends self.ISpriteInstance {},
	Feature: class extends self.ISpriteInstance {},
	Engineer: class extends self.ISpriteInstance {},
	Scoreboard: class extends self.ITextInstance {},
	GoldenFeature: class extends self.ISpriteInstance {},
	TiledBackground: class extends self.ITiledBackgroundInstance {},
	Boundry: class extends self.ISpriteInstance {}
}