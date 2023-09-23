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
const convertXmlToJSONProductData = (xmlData: XMLProductData): JSONProductData[] => {
  /**
   * 詳細実装は省略
   */
  const convertedData: JSONProductData[] = [];
  return convertedData;
};

// CSV用のアダプター
const convertCsvToJSONProductData = (csvData: CSVProductData): JSONProductData[] => {
  /**
   * 詳細実装は省略
   */
  const convertedData: JSONProductData[] = [];
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
const jsonProductsFromXml = convertXmlToJSONProductData(xmlProducts);
registerProducts(jsonProductsFromXml);

// CSVデータをJSONデータに変換して登録
const jsonProductsFromCsv = convertCsvToJSONProductData(csvProducts);
registerProducts(jsonProductsFromCsv);
