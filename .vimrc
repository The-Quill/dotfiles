set number

if empty(glob('~/.vim/autoload/plug.vim'))
  silent !curl -fLo ~/.vim/autoload/plug.vim --create-dirs
    \ https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
  autocmd VimEnter * PlugInstall
endif

call plug#begin('~/vimfiles/plugged')
Plug 'sheerun/vimrc'
Plug 'sheerun/vim-polyglot'
Plug 'leafgarland/typescript-vim'
Plug 'junegunn/vim-github-dashboard'
Plug 'tpope/vim-sleuth'
Plug 'vim-airline/vim-airline'
Plug 'beigebrucewayne/min_solo'
Plug 'vim-airline/vim-airline-themes'
Plug 'chrisbra/csv.vim'
Plug 'scrooloose/nerdtree', { 'on': 'NERDTreeToggle' }
call plug#end()

colorscheme solo_dark
let g:NERDTreeWinSize=22
autocmd VimEnter * NERDTree
autocmd VimEnter * wincmd p
