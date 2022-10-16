import mongoose from 'mongoose';

const { Schema } = mongoose;

/**
 * Schema 정의
 * 컬랙션에 들어가는 문서 내부의 각 필드가 어떤 형식으로 되어있는지 정의
 */
const PostSchema = new Schema({
  title: String,
  body: String,
  tags: [String],
  publishedDate: {
    type: Date,
    default: Date.now,
  },
});

/**
 * 모델 생성
 * 스키마를 사용하여 만드는 인스턴스, 데이터베이스에서 실제 작업을 처리 할 수 있는 함수들을 지니고 있는 객체
 */
const Post = mongoose.model('Post', PostSchema);
export default Post;
