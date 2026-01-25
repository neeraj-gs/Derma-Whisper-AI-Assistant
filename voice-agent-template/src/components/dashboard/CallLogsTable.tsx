/**
 * Call Logs Table Component
 * Displays call history with filters and search
 */

import React, { useState, useMemo } from 'react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { DynamicIcon } from '../../utils/icons';
import { CallLog } from '../../types';
import { cn } from '../../utils/cn';

interface CallLogsTableProps {
  logs: CallLog[];
  className?: string;
}

export const CallLogsTable: React.FC<CallLogsTableProps> = ({ logs, className }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [outcomeFilter, setOutcomeFilter] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Filter logs
  const filteredLogs = useMemo(() => {
    return logs.filter(log => {
      const matchesSearch =
        log.callerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        log.phoneNumber.includes(searchTerm) ||
        log.summary.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesOutcome = outcomeFilter === 'all' || log.outcome === outcomeFilter;

      return matchesSearch && matchesOutcome;
    });
  }, [logs, searchTerm, outcomeFilter]);

  // Paginate
  const totalPages = Math.ceil(filteredLogs.length / itemsPerPage);
  const paginatedLogs = filteredLogs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Format duration
  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Format timestamp
  const formatTimestamp = (iso: string) => {
    const date = new Date(iso);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  // Outcome badge colors
  const outcomeColors: Record<string, 'green' | 'red' | 'orange' | 'blue'> = {
    completed: 'green',
    missed: 'red',
    voicemail: 'orange',
    transferred: 'blue',
  };

  // Sentiment badge colors
  const sentimentColors: Record<string, 'green' | 'red' | 'purple'> = {
    positive: 'green',
    negative: 'red',
    neutral: 'purple',
  };

  return (
    <Card className={cn('', className)}>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          Call Logs
        </h3>

        <div className="flex flex-col sm:flex-row gap-3">
          {/* Search */}
          <div className="relative">
            <DynamicIcon
              name="Search"
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search calls..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Filter */}
          <select
            value={outcomeFilter}
            onChange={(e) => {
              setOutcomeFilter(e.target.value);
              setCurrentPage(1);
            }}
            className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="all">All Outcomes</option>
            <option value="completed">Completed</option>
            <option value="missed">Missed</option>
            <option value="voicemail">Voicemail</option>
            <option value="transferred">Transferred</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-500 dark:text-gray-400">
                Caller
              </th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-500 dark:text-gray-400">
                Time
              </th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-500 dark:text-gray-400">
                Duration
              </th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-500 dark:text-gray-400">
                Outcome
              </th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-500 dark:text-gray-400">
                Sentiment
              </th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-500 dark:text-gray-400">
                Summary
              </th>
            </tr>
          </thead>
          <tbody>
            {paginatedLogs.map((log) => (
              <tr
                key={log.id}
                className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
              >
                <td className="py-4 px-4">
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      {log.callerName}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {log.phoneNumber}
                    </p>
                  </div>
                </td>
                <td className="py-4 px-4 text-sm text-gray-600 dark:text-gray-300">
                  {formatTimestamp(log.timestamp)}
                </td>
                <td className="py-4 px-4 text-sm text-gray-600 dark:text-gray-300">
                  {formatDuration(log.duration)}
                </td>
                <td className="py-4 px-4">
                  <Badge color={outcomeColors[log.outcome]} size="sm">
                    {log.outcome}
                  </Badge>
                </td>
                <td className="py-4 px-4">
                  <Badge color={sentimentColors[log.sentiment]} size="sm" variant="outline">
                    {log.sentiment}
                  </Badge>
                </td>
                <td className="py-4 px-4 text-sm text-gray-600 dark:text-gray-300 max-w-xs truncate">
                  {log.summary}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Empty State */}
      {paginatedLogs.length === 0 && (
        <div className="text-center py-12">
          <DynamicIcon name="Phone" className="mx-auto text-gray-400 mb-4" size={48} />
          <p className="text-gray-500 dark:text-gray-400">No calls found</p>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Showing {(currentPage - 1) * itemsPerPage + 1} to{' '}
            {Math.min(currentPage * itemsPerPage, filteredLogs.length)} of{' '}
            {filteredLogs.length} calls
          </p>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
            >
              <DynamicIcon name="ChevronLeft" size={16} />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
            >
              <DynamicIcon name="ChevronRight" size={16} />
            </Button>
          </div>
        </div>
      )}
    </Card>
  );
};
