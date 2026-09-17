import { fireEvent, render, screen, within } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  localStorage.clear();
  window.IntersectionObserver = class {
    observe() {}
    disconnect() {}
  };
});

test('renders technical career, outcomes and distinct work and demo sections', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('CurrentJob');
  expect(screen.getByText(/2021.11 ~ 재직 중/)).toBeInTheDocument();
  expect(screen.getByText('에프원소프트㈜ · AI융합본부')).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: '핵심 기술 역량' })).toBeInTheDocument();
  expect(screen.getByText('OCR 인식률 83% → 99.7% 개선')).toBeInTheDocument();
  expect(screen.getByText('주요 프로젝트 7건')).toBeInTheDocument();
  expect(screen.getAllByRole('link', { name: /데모 열기/ })).toHaveLength(2);
  expect(document.querySelectorAll('a[href="#"]')).toHaveLength(0);
});

test('filters projects and restores the full list without removing demos', () => {
  render(<App />);
  fireEvent.click(screen.getByRole('button', { name: 'DevOps' }));
  expect(screen.getByRole('button', { name: 'DevOps' })).toHaveAttribute('aria-pressed', 'true');
  expect(screen.getByText('주요 프로젝트 1건')).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'AI 코드리뷰 및 온프레미스 DevOps 자동화' })).toBeInTheDocument();
  expect(screen.queryByRole('heading', { name: '금형 잔여 수명 예측 및 모니터링' })).not.toBeInTheDocument();
  expect(screen.getAllByRole('link', { name: /데모 열기/ })).toHaveLength(2);
  fireEvent.click(screen.getByRole('button', { name: '전체' }));
  expect(screen.getByText('주요 프로젝트 7건')).toBeInTheDocument();
});

test('opens and closes project implementation details', () => {
  render(<App />);
  const article = screen.getByRole('article', { name: 'AI 학습 데이터 구축 및 품질 관리' });
  const summary = within(article).getByText('AI 학습 데이터 구축 및 품질 관리 상세 보기');
  fireEvent.click(summary);
  expect(summary.parentElement).toHaveAttribute('open');

  expect(within(article).getByRole('heading', { name: '검증 방법' })).toBeVisible();
  fireEvent.click(summary);
  expect(summary.parentElement).not.toHaveAttribute('open');
});

test('switches and persists the theme', () => {
  render(<App />);
  fireEvent.click(screen.getByRole('button', { name: 'Toggle Theme' }));
  expect(document.documentElement).toHaveAttribute('data-theme', 'light');
  expect(localStorage.getItem('theme')).toBe('light');
});