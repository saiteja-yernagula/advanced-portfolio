import type { QuizQuestion } from '../types';

export const SAMPLE_QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "What is the primary role of Django's 'serializers.ModelSerializer' in Django REST Framework?",
    codeSnippet: `class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']`,
    options: [
      "To convert Python complex data types/models into native JSON and validate incoming payloads",
      "To compile Python code directly into JavaScript bytecode for the browser",
      "To execute SQL migrations automatically on the database server",
      "To encrypt passwords using symmetric hashing before saving"
    ],
    correctAnswer: 0,
    explanation: "ModelSerializers in DRF automatically generate a serializer class with fields that correspond to the Model fields, handling deserialization, validation, and JSON conversion seamlessly."
  },
  {
    id: 2,
    question: "In React 18+, why does updating state using the functional form 'setCount(prev => prev + 1)' prevent race conditions?",
    codeSnippet: `const handleIncrement = () => {
  setCount(prev => prev + 1);
  setCount(prev => prev + 1);
};`,
    options: [
      "Because React batches state updates and the updater function always receives the most fresh pending state",
      "Because it bypasses the virtual DOM directly",
      "Because it creates a synchronous blocking thread on the browser main execution line",
      "Because React will immediately mutate the component instance synchronously"
    ],
    correctAnswer: 0,
    explanation: "Updater functions guarantee access to the latest state value even during batched asynchronous updates, ensuring reliable multi-step state transitions."
  },
  {
    id: 3,
    question: "In MySQL relational design, what is the primary benefit of adding a composite B-Tree index on (student_id, quiz_id)?",
    codeSnippet: `CREATE INDEX idx_student_quiz ON quiz_attempts (student_id, quiz_id);`,
    options: [
      "It speeds up queries filtering on 'student_id' alone or both 'student_id AND quiz_id' via index lookup",
      "It compresses the database table on disk into a zip archive",
      "It prevents duplicate rows from being inserted into any table in the schema",
      "It converts the table into a non-relational MongoDB collection"
    ],
    correctAnswer: 0,
    explanation: "Leftmost prefix rule: A composite index on (A, B) accelerates queries on (A) as well as (A, B), drastically reducing I/O search times from O(N) full table scans to O(log N)."
  },
  {
    id: 4,
    question: "In Redux Toolkit, what does 'createAsyncThunk' automatically dispatch during its lifecycle?",
    codeSnippet: `export const fetchQuizResults = createAsyncThunk(
  'quiz/fetchResults',
  async (quizId) => await api.getResults(quizId)
);`,
    options: [
      "Three action types representing pending, fulfilled, and rejected promise states",
      "A raw DOM event listener on window.document",
      "A WebSocket reconnection broadcast to all connected clients",
      "An automated Git commit to the repository"
    ],
    correctAnswer: 0,
    explanation: "createAsyncThunk handles the entire promise lifecycle by automatically creating and dispatching .pending, .fulfilled, and .rejected action types that extraReducers can listen to."
  }
];
