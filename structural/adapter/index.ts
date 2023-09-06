type JSONProductData = {
  name: string;
  price: number;
};

// 既存のJSONデータを受け付ける関数
const registerProducts = (products: JSONProductData[]): void => {
  /**
   * データを登録する
   */
};

// XML用のアダプター
const adaptXmlToJSONProductData = (xmlData: string): JSONProductData[] => {
  const convertedData: JSONProductData[] = []; // Assume this is converted from XML to JSONProductData[]
  return convertedData;
};

// CSV用のアダプター
const adaptCsvToJSONProductData = (csvData: string): JSONProductData[] => {
  const convertedData: JSONProductData[] = []; // Assume this is converted from CSV to JSONProductData[]
  return convertedData;
};

// 使用方法
const jsonProducts: JSONProductData[] = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 50 },
];
const xmlProducts: string =
  "<products><product><name>Laptop</name><price>1000</price></product><product><name>Mouse</name><price>50</price></product></products>";
const csvProducts: string = "Laptop,1000\nMouse,50";

// JSONデータは今まで通り登録できる
registerProducts(jsonProducts);
// XMLデータをJSONデータに変換して登録
registerProducts(adaptXmlToJSONProductData(xmlProducts));
// CSVデータをJSONデータに変換して登録
registerProducts(adaptCsvToJSONProductData(csvProducts));
