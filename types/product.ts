/**
 * 商品情報を表すインターフェース
 * 
 * @interface Product
 * @property {string} id - 商品の一意な識別子
 * @property {string} name - 商品名
 * @property {number} price - 商品価格（税込）
 * @property {string} description - 商品の詳しい説明
 * @property {string} imageUrl - 商品画像のURL
 * @property {string} category - 商品カテゴリー
 */
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  // カテゴリー属性を追加理由: 将来的にフィルター機能を実装しやすくするため
  category: string;
}
