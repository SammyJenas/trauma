let chars = [];
let extended = ['Ç', 'ü', 'é', 'â', 'ä', 'à', 'å', 'ç', 'ê', 'ë', 'è', 'ï', 'î', 'ì', 'Ä', 'Å', 'É', 'æ', 'Æ', 'ô', 'ö', 'ò', 'û', 'ù', 'ÿ', 'Ö', 'Ü', 'ø', '£', 'Ø', '×', 'ƒ', 'á', 'í', 'ó', 'ú', 'ñ', 'Ñ', 'ª', 'º', '¿', '®', '¬', '½', '¼', '¡', '«', '»', '░', '▒', '▓', '│', '┤', 'Á', 'Â', 'À', '©', '╣', '║', '╗', '╝', '¢', '¥', '┐', '└', '┴', '┬', '├', '─', '┼', 'ã', 'Ã', '╚', '╔', '╩', '╦', '╠', '═', '╬', '¤', 'ð', 'Ð', 'Ê', 'Ë', 'È', 'ı', 'Í', 'Î', 'Ï', '┘', '┌', '█', '▄', '¦', 'Ì', '▀', 'Ó', 'ß', 'Ô', 'Ò', 'õ', 'Õ', 'µ', 'þ', 'Þ', 'Ú', 'Û', 'Ù', 'ý', 'Ý', '¯', '´', '¬', '±', '‗', '¾', '¶', '§', '÷', '¸', '°', '¨', '·', '¹', '³', '²', '■', ''];
let cols = [];
let font1;
let ready = false;
let pg;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  pg = createGraphics(1920, 1440)
  pixelDensity(1);
  noSmooth();
  font1 = loadFont('WebPlus_IBM_VGA_8x16.woff', ready = true);
  textFont(font1);
  pg.textFont(font1);
  textSize(48);
  // ascii lower
  for (i = 0; i < 128; i++) {
    chars[i] = String.fromCharCode(i);
  }
  //ascii extended
  for (i = 0; i < extended.length; i++) {
    chars[i + 128] = extended[i];
  }
  cols = [color(0, 0, 0), color(0, 0, 170), color(0, 170, 0), color(0, 170, 170), color(170, 0, 0), color(170, 0, 170), color(170, 85, 0), color(170, 170, 170), color(85, 85, 85), color(85, 85, 255), color(85, 255, 85), color(85, 255, 255), color(255, 85, 85),color(255, 85, 255),color(255, 225, 85), color(255, 255, 225)];
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  pg.background(0);
  if (frameCount == 1){
    windowResized();
  }
  if (ready){
    for (i = 0; i < pg.width; i += 24) {
      for (j = 36; j < pg.height + 48; j += 48) {
        let r = int(random(32, chars.length +1));
        let l = chars[r];
        let c1 = random(cols);
        let c2 = random(cols);
        textCell(i, j, l, c1, c2);
      }
    }
   image(pg, 0, 0, windowWidth, windowHeight); 
  }  
}

  function textCell(x, y, letter, col1, col2) {
    pg.fill(col1);
    pg.stroke(col1);
    pg.strokeWeight(0);
    pg.rect(x, y -36, 24, 48);
    pg.fill(col2);
    pg.noStroke();
    pg.textSize(48);
    pg.text(letter, x, y);
  }
