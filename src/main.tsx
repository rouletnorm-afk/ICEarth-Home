import React, { StrictMode, Component, ErrorInfo, ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class RootErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  props: ErrorBoundaryProps;
  state: ErrorBoundaryState;

  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.props = props;
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ICEarth Application Error Caught by Boundary:', error, errorInfo);
  }

  handleReset = () => {
    try {
      window.location.search = '?tab=sovereign_portal';
    } catch {
      window.location.reload();
    }
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-stone-900 text-stone-100 flex flex-col items-center justify-center p-6 text-center font-sans">
          <div className="max-w-lg bg-stone-950 border border-amber-500/40 rounded-2xl p-8 shadow-2xl space-y-4">
            <div className="w-12 h-12 rounded-full bg-amber-500/20 border border-amber-500/50 flex items-center justify-center mx-auto text-amber-400 text-2xl font-bold">
              ⚡
            </div>
            <h1 className="text-xl font-bold font-serif text-amber-200">
              ICEarth Platform Recovery
            </h1>
            <p className="text-xs text-stone-400 leading-relaxed">
              A temporary runtime condition was safely contained. You can reload the Sovereign Portal below.
            </p>
            {this.state.error && (
              <pre className="text-[10px] font-mono text-rose-300 bg-black/60 p-3 rounded-lg text-left overflow-x-auto max-h-36 border border-rose-900/50">
                {this.state.error.message}
              </pre>
            )}
            <button
              onClick={this.handleReset}
              className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs rounded-xl shadow transition-all cursor-pointer"
            >
              Reload Sovereign Portal
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RootErrorBoundary>
      <App />
    </RootErrorBoundary>
  </StrictMode>,
);
