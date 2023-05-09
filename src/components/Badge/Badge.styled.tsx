import styled from 'styled-components';

export const BadgeStyled = styled.button`
  pointer-events: none !important;
  font-weight: bold !important;
  font-size: 12px !important;
  border-radius: 4px !important;
  padding: 4px !important;

  &.success {
    background-color: #c0e2d0 !important;
    color: #36a168 !important;
  }

  &.feature {
    background-color: #f1eeff !important;
    color: #7b61ff !important;
  }

  &.api-post {
    background-color: #c0e2d0 !important;
    color: #36a168 !important;
    padding: 4px 8px !important;
  }

  &.failure {
    background-color: #fcdddd !important;
    color: #f05656 !important;
  }

  &.api-delete {
    background-color: #fcdddd !important;
    color: #f05656 !important;
    padding: 4px 8px !important;
  }

  &.warning {
    background-color: #fef0d7 !important;
    color: #feb452 !important;
  }

  &.api-get {
    background-color: #fef0d7 !important;
    color: #feb452 !important;
    padding: 4px 8px !important;
  }

  &.tip {
    background-color: #d9ebff;
    color: #1482ff;
  }

  &.api-put {
    background-color: #d9ebff;
    color: #1482ff;
    padding: 4px 8px !important;
  }
`;
