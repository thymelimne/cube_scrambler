
array = ["U","U'","D","D'","R","R'","L","L'","F","F'","B","B'"]

getRand=()=>{
  var item = array[Math.floor(Math.random() * array.length)];
  return item
}

table = new UITable()
tRow = new UITableRow()
table.addRow(tRow)
tText = tRow.addText("rubik's cube scrambler","⬜️🟥🟧🟨🟩🟦")
tText.titleFont=Font.boldMonospacedSystemFont(20)
tText.centerAligned()
max = 6
nRows=12
for (j=0; j<nRows; j+=1){
  row = new UITableRow()
  table.addRow(row)
  for (i=0; i<max; i+=1){
    var rand = getRand()
    while (Math.random()<.5){
      rand = getRand()
    }
    row.addText(rand)}
}
table.present()
