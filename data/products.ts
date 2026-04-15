import { Product } from "../types/product";

/**
 * 開発およびテスト用の商品データリスト
 * 
 * @constant products
 * @type {Product[]}
 */
export const products: Product[] = [
  {
    id: "1",
    name: "プレミアム・デスクランプ",
    price: 12800,
    description: "北欧デザインの洗練されたデスクランプ。調光機能を備え、長時間の作業でも疲れにくい設計です。",
    imageUrl: "/images/product-1.jpg",
    category: "インテリア",
  },
  {
    id: "2",
    name: "ワイヤレス・エルゴマウス",
    price: 8500,
    description: "手首への負担を最小限に抑える人間工学に基づいたデザイン。高精度のトラッキングを実現します。",
    imageUrl: "/images/product-2.jpg",
    category: "PC周辺機器",
  },
  {
    id: "3",
    name: "ノイズキャンセリングヘッドフォン",
    price: 24000,
    description: "静寂の中、高品質なサウンドに没入。最新のアクティブノイズキャンセリング技術を搭載。",
    imageUrl: "/images/product-3.jpg",
    category: "オーディオ",
  },
  {
    id: "4",
    name: "エコフレンドリー・ウォーターボトル",
    price: 3200,
    description: "耐久性に優れたステンレス製。保温・保冷機能付きで、環境に優しいライフスタイルをサポート。",
    imageUrl: "/images/product-4.jpg",
    category: "ライフスタイル",
  },
  {
    id: "5",
    name: "ポータブル・メカニカルキーボード",
    price: 15800,
    description: "心地よい打鍵感と携帯性を両立。カスタマイズ可能なバックライトを搭載したコンパクトモデル。",
    imageUrl: "/images/product-5.jpg",
    category: "PC周辺機器",
  },
];

// Why: 商品データを個別に取得するロジックが必要になるため、IDベースの検索関数を用意
/**
 * IDを指定して商品情報を取得する
 * 
 * @param {string} id - 取得したい商品のID
 * @returns {Product | undefined} - 見つかった商品情報、または見つからない場合はundefined
 */
export const getProductById = (id: string): Product | undefined => {
  return products.find((product) => product.id === id);
};
