import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AVAILABLE_PAGES_RANGE, PAGE_PARAM, PAGINATION_LIMIT } from 'app/constants';
import { Button } from 'atomic/atm.button';
import Loading from 'react-loading';
import { useSearchParams } from 'react-router-dom';

interface PaginatorProps {
  isLoading: boolean;
  count: number;
  limit: number;
}

export function getCurrentPage(searchParams: URLSearchParams): number {
  const currentPageString = searchParams.get(PAGE_PARAM);
  return currentPageString ? parseInt(currentPageString) : 1;
}

export function getCurrentOffset(searchParams: URLSearchParams): number {
  return getCurrentPage(searchParams) * PAGINATION_LIMIT;
}

export function Paginator({ isLoading, count, limit }: PaginatorProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = getCurrentPage(searchParams);
  const firstPage = 1;
  const lastPage = Math.floor(count / limit);

  const getAvailablePages = (currentPage: number) => {
    const availablePages = [firstPage];

    for (let i = currentPage - AVAILABLE_PAGES_RANGE; i <= currentPage + AVAILABLE_PAGES_RANGE; i++) {
      if (i > firstPage && i < lastPage) {
        availablePages.push(i);
      }
    }
    if (lastPage > firstPage) {
      availablePages.push(lastPage);
    }

    return availablePages;
  };

  const handleChangePage = (pageNumber: number) => {
    if (pageNumber >= firstPage && pageNumber <= lastPage) {
      setSearchParams({ page: String(pageNumber) });
    }
  };

  return (
    <div>
      {isLoading ? (
        <Loading type='bars' color='#000' height={20} width={20} />
      ) : (
        <>
          <Button onClick={() => handleChangePage(currentPage - 1)}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </Button>
          {getAvailablePages(currentPage).map((availablePage) => {
            return (
              <Button key={availablePage} onClick={() => handleChangePage(availablePage)}>
                {availablePage}
              </Button>
            );
          })}
          <Button onClick={() => handleChangePage(currentPage + 1)}>
            <FontAwesomeIcon icon={faAngleRight} />
          </Button>
        </>
      )}
    </div>
  );
}
